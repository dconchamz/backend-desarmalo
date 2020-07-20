const { validationResult } = require('express-validator');
const Sequelize = require('sequelize');
const {
  osec_t_item: osecItem,
  osec_t_item_description: osecItemDescription,
} = require('../services/sequelize');

async function getItemById(req, res) {
  //validamos el request como parametro de la URL
  const errors = validationResult(req);

  //obtenemos
  const {
    query: { pk_i_id: pkiId },
  } = req;

  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  try {
    const item = await osecItem.findOne({
      where: { pk_i_id: pkiId },
      include: [
        {
          model: osecItemDescription,
        },
      ],
    });

    if (!item) {
      return res
        .status(404)
        .send({ errors: [`The item with id ${pkiId} doesn't exists`] });
    }

    const usedVehicleResponse = {
      itemId: item.pk_i_id,
      itemUserId: item.fk_i_user_id,
      itemCategoryId: item.fk_i_category_id,
      dtPubDate: item.dt_pub_date,
      dtModDate: item.dt_mod_date,
      price: item.f_price,
      itemPrice: item.i_price,
      currencyCode: item.fk_c_currency_code,
      contactName: item.s_contact_name,
      contactEmail: item.s_contact_email,
      ip: item.s_ip,
      premium: item.b_premium,
      enabled: item.b_enabled,
      active: item.b_active,
      spam: item.b_spam,
      secret: item.s_secret,
      showEmail: item.b_show_email,
      dtExpiration: item.dt_expiration,
      fkItemId: item.osec_t_item_description.fk_i_item_id,
      fkLocaleCode: item.osec_t_item_description.fk_c_locale_code,
      title: item.osec_t_item_description.s_title,
      description: item.osec_t_item_description.s_description,
    };

    return res.status(200).send(usedVehicleResponse);
  } catch (error) {
    res.status(500).send({ errors: ['Internal server error'] });

    throw new Error(error);
  }
}

module.exports = {
  getItemById,
};

const Joi = require('joi');
const CategoriesValidation = Joi.object({
    categoryName: Joi.string()
})
const categoryValidation = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    categoryId: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
})
const bikeValidation = Joi.object({
    bikeCategories: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    locations: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    budget: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    brand: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    model: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    kmDriven: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    year: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),
})
const mobileValidation = Joi.object({

    mobileCategory: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    locations: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    budget: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    brand: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
})
const electronicValidation = Joi.object({
    electronicAndAppliances: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    locations: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    budget: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
})
const commercialVehicleValidation = Joi.object({
    categories: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    locations: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    budget: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    kmDriven: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    year: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),
})
const petValidation = Joi.object({
    categories: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    locations: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    budget: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
})
const propertiesValidation = Joi.object({
    categories: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    locations: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    budget: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
})
const serviceValidation = Joi.object({

    services: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    locations: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
})
const fashionValidation = Joi.object({

    fashion: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    locations: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    budget: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
})
const furnitureValidation = Joi.object({

    categories: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    locations: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    budget: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
})
const jobValidation = Joi.object({

    categories: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    locations: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
})
const carValidation = Joi.object({
    locations: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    brandAndModel: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    popularBrand: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    allBrand: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    allModel: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    budget: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    year: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    noOfOwners: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    inspectionStatus: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),
    kmDriven: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    fuel: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    transmission: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
})
const locationValidation = Joi.object({
    state: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    districtId: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
})
const disValidation=Joi.object({
    state:Joi.string(),
    districtName:Joi.string(),
    cityId:Joi.string()
})

module.exports = {
    categoryValidation,
    CategoriesValidation,
    bikeValidation,
    mobileValidation,
    electronicValidation,
    commercialVehicleValidation,
    petValidation,
    propertiesValidation,
    serviceValidation,
    fashionValidation,
    furnitureValidation,
    jobValidation,
    carValidation,
    locationValidation,
    disValidation
    
}
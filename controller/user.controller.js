const categoryModel = require("../Schema/categorySchema");
const locationModel = require("../Schema/locationSchema");
const cityModel = require("../Schema/citySchema");
const disModel = require("../Schema/disSchema");
const carModel = require("../Schema/carSchema");
const jobModel = require("../Schema/jobSchema");
const furnitureModel = require("../Schema/furnitureSchema");
const fashionModel = require("../Schema/fashionSchema");
const serviceModel = require("../Schema/serviceSchema");
const propertiesModel = require("../Schema/propertiesSchema");
const petModel = require("../Schema/petSchema");
const commercialVehicleModel = require("../Schema/commercialVehicleSubCategory");
const mobileModel = require("../Schema/mobileSchema");
const bikeModel = require("../Schema/bikeSchema");
const electronicModel = require("../Schema/electronicSchema");
const {locationValidation,disValidation,categoryValidation,carValidation,jobValidation,furnitureValidation,fashionValidation,serviceValidation,propertiesValidation,petValidation,CategoriesValidation,bikeValidation,mobileValidation,electronicValidation,commercialVehicleValidation} = require("../validations/user.validations");
const electronicSchema = require("../Schema/electronicSchema");
const axios = require('axios');
module.exports.category = async ({categoryName }) => {
    try {
        let { error } =CategoriesValidation.validate({ categoryName});
        if (error) {
            throw new Error(error.message);
        }
        let user = await categoryModel.create({categoryName});
        return {
            message: 'success',
            status: 201,
            user
        }
    } catch (error) {
        throw error;
    }
}
module.exports.categories = async () => {
    try {
        let user = await categoryModel.find().select("categoryName");
        if (!user) {
            throw new Error('user doesn`t exist');
        }
        return {
            message: 'success',
            status: 200,
            user
        }
    } catch (error) {
        throw error;
    }
}
module.exports.categoriesChildId = async ({_id}) => {
    try{   
        let user = await categoryModel.findById({_id:_id});
        if (!user) {
            throw new Error('user doesn`t exist');
        }
        console.log(user)
        return {
            message: 'success',
            status: 200,
            user
        }
    } catch (error) {
        throw error;
    }
}

module.exports.bikeSubCategory = async ({ bikeCategories,locations,budget,brand,model,kmDriven,year }) => {
    try {
        let { error, value } = bikeValidation.validate({bikeCategories,locations,budget,brand,model,kmDriven,year});
        if (error) {
            throw new Error(error.message);
        }
        let user = await bikeModel.create({
            ...value
        });
        return {
            message: 'success',
            status: 201,
            user
        }
    } catch (error) {
        throw error;
    }
}

module.exports.mobileSubCategory = async ({ mobileCategory,locations,budget,brand }) => {
    try {
        let { error, value } = mobileValidation.validate({mobileCategory,locations,budget,brand});
        if (error) {
            throw new Error(error.message);
        }
        let user = await mobileModel.create({
            ...value
        });
        return {
            message: 'success',
            status: 201,
            user
        }
    } catch (error) {
        throw error;
    }
}
module.exports.electronicSubCategory = async ({  electronicAndAppliances,locations,budget}) => {
    try {
        let { error, value } = electronicValidation.validate({ electronicAndAppliances,locations,budget});
        if (error) {
            throw new Error(error.message);
        }
        let user = await electronicModel.create({
            ...value
        });
        return {
            message: 'success',
            status: 201,
            user
        }
    } catch (error) {
        throw error;
    }
}
module.exports.commercialVehicleSubCategory = async ({  categories,locations,budget,kmDriven,year}) => {
    try {
        let { error, value } = commercialVehicleValidation.validate({ categories,locations,budget,kmDriven,year});
        if (error) {
            throw new Error(error.message);
        }
        let user = await commercialVehicleModel.create({
            ...value
        });
        return {
            message: 'success',
            status: 201,
            user
        }
    } catch (error) {
        throw error;
    }
}
module.exports.petSubCategory = async ({  categories,locations,budget}) => {
    try {
        let { error, value } = petValidation.validate({ categories,locations,budget});
        if (error) {
            throw new Error(error.message);
        }
        let user = await petModel.create({
            ...value
        });
        return {
            message: 'success',
            status: 201,
            user
        }
    } catch (error) {
        throw error;
    }
}
module.exports.propertiesSubCategory = async ({  categories,locations,budget}) => {
    try {
        let { error, value } = propertiesValidation.validate({ categories,locations,budget});
        if (error) {
            throw new Error(error.message);
        }
        let user = await propertiesModel.create({
            ...value
        });
        return {
            message: 'success',
            status: 201,
            user
        }
    } catch (error) {
        throw error;
    }
}
module.exports.serviceSubCategory = async ({  services,locations}) => {
    try {
        let { error, value } = serviceValidation.validate({ services,locations});
        if (error) {
            throw new Error(error.message);
        }
        let user = await serviceModel.create({
            ...value
        });
        return {
            message: 'success',
            status: 201,
            user
        }
    } catch (error) {
        throw error;
    }
}

module.exports.fashionSubCategory = async ({  fashion,locations,budget}) => {
    try {
        let { error, value } = fashionValidation.validate({ fashion,locations,budget});
        if (error) {
            throw new Error(error.message);
        }
        let user = await fashionModel.create({
            ...value
        });
        return {
            message: 'success',
            status: 201,
            user
        }
    } catch (error) {
        throw error;
    }
}
module.exports.furnitureSubCategory = async ({  categories,locations,budget}) => {
    try {
        let { error, value } = furnitureValidation.validate({ categories,locations,budget});
        if (error) {
            throw new Error(error.message);
        }
        let user = await furnitureModel.create({
            ...value
        });
        return {
            message: 'success',
            status: 201,
            user
        }
    } catch (error) {
        throw error;
    }
}
module.exports.jobSubCategory = async ({  categories,locations}) => {
    try {
        let { error, value } = jobValidation.validate({ categories,locations});
        if (error) {
            throw new Error(error.message);
        }
        let user = await jobModel.create({
            ...value
        });
        return {
            message: 'success',
            status: 201,
            user
        }
    } catch (error) {
        throw error;
    }
}
module.exports.carSubCategory = async ({locations,brandAndModel,popularBrand,allBrand,allModel,budget,year,noOfOwners,inspectionStatus,kmDriven,fuel,transmission}) => {
    try {
        let { error, value } = carValidation.validate({ locations,brandAndModel,popularBrand,allBrand,allModel,budget,year,noOfOwners,inspectionStatus,kmDriven,fuel,transmission});
        if (error) {
            throw new Error(error.message);
        }
        let user = await carModel.create({
            ...value
        });
        return {
            message: 'success',
            status: 201,
            user
        }
    } catch (error) {
        throw error;
    }
}
module.exports.location = async ({state,districtId }) => {
    try {
        let { error } =locationValidation.validate({state,districtId});
        if (error) {
            throw new Error(error.message);
        }
        let user = await locationModel.create({state,districtId});
        return {
            message: 'success',
            status: 201,
            user
        }
    } catch (error) {
        throw error;
    }
}
module.exports.disLocation = async ({state,districtName,cityId }) => {
    try {
        let { error } =disValidation.validate({state,districtName,cityId});
        if (error) {
            throw new Error(error.message);
        }
        let user = await disModel.create({state,districtName,cityId});
        return {
            message: 'success',
            status: 201,
            user
        }
    } catch (error) {
        throw error;
    }
}

module.exports.citylocation = async ({districtName}) => {
    try {
        let user = await cityModel.create({districtName});
        return {
            message: 'success',
            status: 201,
            user
        }
    } catch (error) {
        throw error;
    }
}

module.exports.citysearch = async ({city}) => {
    const options = {
        method: 'GET',
        url: 'https://city-and-state-search-api.p.rapidapi.com/cities/search',
        params: {q: city},
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': '13bb4dfa83msha786c41bd74f8e9p118b62jsn844c8a1aa49d',
          'X-RapidAPI-Host': 'city-and-state-search-api.p.rapidapi.com'
        }
      };
       try {
        const response = await axios.request(options);
        console.log(response.data);
        return {
            message: 'success',
            status: 201,
            data:response.data
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
}



const express = require("express");
const { JsonWebTokenError } = require("jsonwebtoken");
const dbConnect = require("./config/DBConnect");
const userController = require("./controller/user.controller");
const app = express();
const swaggerUI = require('swagger-ui-express');
const port = process.env.Port || 17000;
dbConnect();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    // #swagger.summary = "Hello World!!"
    res.send("Helo from the other side")
});

app.post("/category", async (req, res) => {
    // #swagger.summary = "category"
    /*  #swagger.parameters['body'] = {
                    in: 'body',
                    description: 'Some description...',
                    schema: {
                        categoryName:'',
                    }
            } */
    try {
        let response = await userController.category(req.body);
        return res.status(response.status).send(response);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

app.get("/categories", async (req, res) => {
    // #swagger.summary = "AllCategories"
     try {
        console.log(req.body,"manishhh")
        let response = await userController.categories(req.query);
        return res.status(response.status).send(response);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

app.post("/categoriesChildId", async (req, res) => {
    // #swagger.summary = "subCategoriesById"
     /*  #swagger.parameters['body'] = {
                    in: 'body',
                    description: 'Some description...',
                    schema: {
                        _id:'',
                    }
            } */
     try {
        console.log(req.body,"manishhh")
        let response = await userController.categoriesChildId(req.body);
        return res.status(response.status).send(response);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

app.post("/bikeSubCategory", async (req, res) => {
    // #swagger.summary = "sub category"
    /*  #swagger.parameters['body'] = {
                    in: 'body',
                    description: 'Some description...',
                    schema: {
                        bikeCategories:'',
                        locations:'',
                        budget:'',
                        brand:'',
                        model:'',
                        kmDriven:'',
                        year:''
                    }
            } */
    try {
        let response = await userController.bikeSubCategory(req.body);
        return res.status(response.status).send(response);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})
app.post("/mobileSubCategory", async (req, res) => {
    // #swagger.summary = "sub category"
    /*  #swagger.parameters['body'] = {
                    in: 'body',
                    description: 'Some description...',
                    schema: {
                        mobileCategory:'',
                        locations:'',
                        budget:'',
                        brand:'',
                    }
            } */
    try {
        let response = await userController.mobileSubCategory(req.body);
        return res.status(response.status).send(response);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})
app.post("/electronicSubCategory", async (req, res) => {
    // #swagger.summary = "sub category"
    /*  #swagger.parameters['body'] = {
                    in: 'body',
                    description: 'Some description...',
                    schema: {
                        electronicAndAppliances:'',
                        locations:'',
                        budget:'',
                        brand:'',
                    }
            } */
    try {
        let response = await userController.electronicSubCategory(req.body);
        return res.status(response.status).send(response);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})
app.post("/commercialVehicleSubCategory", async (req, res) => {
    // #swagger.summary = "sub category"
    /*  #swagger.parameters['body'] = {
                    in: 'body',
                    description: 'Some description...',
                    schema: {
                        categories:'',
                        locations:'',
                        budget:'',
                        kmDriven:'',
                        year:'',
                    }
            } */
    try {
        let response = await userController.commercialVehicleSubCategory(req.body);
        return res.status(response.status).send(response);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})
app.post("/petSubCategory", async (req, res) => {
    // #swagger.summary = "sub category"
    /*  #swagger.parameters['body'] = {
                    in: 'body',
                    description: 'Some description...',
                    schema: {
                        categories:'',
                        locations:'',
                        budget:'',
                    }
            } */
    try {
        let response = await userController.petSubCategory(req.body);
        return res.status(response.status).send(response);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})
app.post("/propertiesSubCategory", async (req, res) => {
    // #swagger.summary = "sub category"
    /*  #swagger.parameters['body'] = {
                    in: 'body',
                    description: 'Some description...',
                    schema: {
                        categories:'',
                        locations:'',
                        budget:'',
                    }
            } */
    try {
        let response = await userController.propertiesSubCategory(req.body);
        return res.status(response.status).send(response);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})

app.post("/serviceSubCategory", async (req, res) => {
    // #swagger.summary = "sub category"
    /*  #swagger.parameters['body'] = {
                    in: 'body',
                    description: 'Some description...',
                    schema: {
                        services:'',
                        locations:'',
                    }
            } */
    try {
        let response = await userController.serviceSubCategory(req.body);
        return res.status(response.status).send(response);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})
app.post("/fashionSubCategory", async (req, res) => {
    // #swagger.summary = "sub category"
    /*  #swagger.parameters['body'] = {
                    in: 'body',
                    description: 'Some description...',
                    schema: {
                        fashion:'',
                        locations:'',
                        budget:'',
                    }
            } */
    try {
        let response = await userController.fashionSubCategory(req.body);
        return res.status(response.status).send(response);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})
app.post("/furnitureSubCategory", async (req, res) => {
    // #swagger.summary = "sub category"
    /*  #swagger.parameters['body'] = {
                    in: 'body',
                    description: 'Some description...',
                    schema: {
                        categories:'',
                        locations:'',
                        budget:'',
                    }
            } */
    try {
        let response = await userController.furnitureSubCategory(req.body);
        return res.status(response.status).send(response);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})
app.post("/jobSubCategory", async (req, res) => {
    // #swagger.summary = "sub category"
    /*  #swagger.parameters['body'] = {
                    in: 'body',
                    description: 'Some description...',
                    schema: {
                        categories:'',
                        locations:'',
                    }
            } */
    try {
        let response = await userController.jobSubCategory(req.body);
        return res.status(response.status).send(response);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})
app.post("/carSubCategory", async (req, res) => {
    // #swagger.summary = "sub category"
    /*  #swagger.parameters['body'] = {
                    in: 'body',
                    description: 'Some description...',
                    schema: {
                        locations:'',
                        brandAndModel:'',
                        popularBrand:'',
                        allBrand:'',
                        allModel:'',
                        budget:'',
                        year:'',
                        noOfOwners:'',
                        inspectionStatus:'',
                        kmDriven:'',
                        fuel:'',
                        transmission:''
                    }
            } */
    try {
        let response = await userController.carSubCategory(req.body);
        return res.status(response.status).send(response);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})
app.post("/location", async (req, res) => {
    // #swagger.summary = "category"
    /*  #swagger.parameters['body'] = {
                    in: 'body',
                    description: 'Some description...',
                    schema: {
                        state:'',
                        distictId:''

                    }
            } */
    try {
        let response = await userController.location(req.body);
        return res.status(response.status).send(response);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})
app.post("/cityLocation", async (req, res) => {
    // #swagger.summary = "category"
    /*  #swagger.parameters['body'] = {
                    in: 'body',
                    description: 'Some description...',
                    schema: {
                        
                        districtName:'',
                        cityName:[  "Andhra Pradesh",  "Arunachal Pradesh",  "Assam",  "Bihar",  "Chhattisgarh",  "Goa",  "Gujarat",  "Haryana",  "Himachal Pradesh",  "Jharkhand",  "Karnataka",  "Kerala",  "Madhya Pradesh",  "Maharashtra",  "Manipur",  "Meghalaya",  "Mizoram",  "Nagaland",  "Odisha",  "Punjab",  "Rajasthan",  "Sikkim",  "Tamil Nadu",  "Telangana",  "Tripura",  "Uttar Pradesh",  "Uttarakhand",  "West Bengal",  "Andaman and Nicobar Islands",  "Chandigarh",  "Dadra and Nagar Haveli and Daman and Diu",  "Lakshadweep",  "Delhi",  "Puducherry",  "Jammu and Kashmir",  "Ladakh"]

                    }
            } */
    try {
        let response = await userController.cityLocation(req.body);
        return res.status(response.status).send(response);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
});
app.get('/citysearch',async(req,res)=>{
    // #swagger.summary = "city"
    /*  #swagger.parameters['city'] = {
                    in: 'query',
                    description: 'Some description...',
                    name:"city"
            } */
    try {
        console.log(req.query);
        let response = await userController.citysearch(req.query);
        return res.status(response.status).send(response);
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
})
const swaggerJson = require('./swagger.json')
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJson))

app.listen(port, () => {
    console.log(`connection is setup at ${port}`)
})
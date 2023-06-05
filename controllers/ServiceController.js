const  {Service:ServiceModel} =require("../models/Services")

const serviceController = {
    create: async(req, res)=>{
        try {
            const service = {
                name:req.body.name,
                description:req.body.description,
                price:req.body.price,
                image: req.body.image,
            };
            
            const response = await ServiceModel.create(service);

            res.status(201).json({response, msg:"Service create"})
        } catch (error) {
            res.json({msg:"Erro na entrada de dados"})
        }
    }
}

module.exports = serviceController
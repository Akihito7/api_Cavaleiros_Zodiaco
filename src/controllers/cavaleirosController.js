const knex = require("../database/knex");

class cavaleirosController {


async getAllCavaleiros(request , response){

   const cavaleiros = await knex("cavaleiros");

   response.json(cavaleiros);
}

async createCavaleiros(request,response){

   const {nome,idade,sobre,poderes,classificacao,potencial_destrutivo,alcance,resistencia,forca_impacto,estamina,inteligencia,image,mentalidade,forca_fisica} = request.body;
  
   await knex("cavaleiros").insert(
      {
         nome,idade,sobre,poderes,classificacao,potencial_destrutivo,alcance,resistencia,forca_impacto,estamina,inteligencia,image,mentalidade,forca_fisica
      }
   )

     return response.status(204).json();

}

async getACavaleiro(request,response){

   const {name} = request.params;
   
   const cavaleiro = await knex("cavaleiros").whereLike('nome', `%${name}%`).first();

   response.json(cavaleiro);

}
  
}

module.exports = cavaleirosController;
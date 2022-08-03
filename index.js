const neo4j = require('neo4j-driver');

const driver = neo4j.driver(
    'bolt://localhost:7687',
    neo4j.auth.basic('neo4j','neo4j1') // login e senha do banco
)

const session = driver.session();

async function buscarAmigosDosAmigos(){
    session.run('MATCH (:Pessoa{nome:"Fabiola"})-[*2]->(p2:Pessoa)RETURN p2.nome').then(result =>{
        console.log(result);
    });
}
        
//criarPessoa();

buscarAmigosDosAmigos();
driver.close();
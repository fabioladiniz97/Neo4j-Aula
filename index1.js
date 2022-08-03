const neo4j = require('neo4j-driver');

const driver = neo4j.driver(
    'bolt://localhost:7687',
    neo4j.auth.basic('neo4j','neo4j1') // login e senha do banco
)

const session = driver.session();

async function criarPessoa(){
    await session.run('CREATE (:Pessoa{nome:"Teste"})').then(result=>{
        console.log(result);
    });
      
}
criarPessoa();

driver.close();

import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'
import { Dao } from './Dao';

// let dao: ConcessionariaDao = new ConcessionariaDao()
// let concessionaria = new Concessionaria('', [])

// dao.inserir(concessionaria)

// let dao2: PessoaDao = new PessoaDao();
// let pessoa: Pessoa = new Pessoa('','')

// dao2.atualizar(pessoa);

let pessoa: Pessoa = new Pessoa('', '')
let concessionaria: Concessionaria = new Concessionaria('', [])

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>();
let dao4: Dao<Pessoa> = new Dao<Pessoa>();

dao3.inserir(concessionaria);
dao4.remover(5);
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cadastro.css'; // Certifique-se de que este arquivo existe

const Cadastro = () => {
  const [nomeCompleto, setNomeCompleto] = useState<string>('');
  const [endereco, setEndereco] = useState<string>('');
  const [telefone1, setTelefone1] = useState<string>('');
  const [telefone2, setTelefone2] = useState<string>('');
  const [telefone3, setTelefone3] = useState<string>('');
  const [sexo, setSexo] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [confirmSenha, setConfirmSenha] = useState<string>('');
  const [msgError, setMsgError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (senha !== confirmSenha) {
      setMsgError('As senhas não coincidem.');
      return;
    }

    if (!email.includes('@')) {
      setMsgError('O e-mail não é válido, pois falta o caractere "@"');
      return;
    }

    try {
      const dadosUsuario = {
        nomeCompleto,
        endereco,
        telefone: `${telefone1}-${telefone2}-${telefone3}`,
        sexo,
        email,
        senha,
      };

      console.log('Dados do usuário:', dadosUsuario);
      // await cadastrarUsuario(dadosUsuario);

      setSuccessMessage('Usuário cadastrado com sucesso!');
      setNomeCompleto('');
      setEndereco('');
      setTelefone1('');
      setTelefone2('');
      setTelefone3('');
      setSexo('');
      setEmail('');
      setSenha('');
      setConfirmSenha('');
      setMsgError('');

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error: any) {
      setMsgError('Erro ao cadastrar usuário: ' + error.message);
    }
  };

  return (
    <div className="cadastrar-usuario-container">
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome Completo:</label>
          <input
            type="text"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
            className="form-control"
            placeholder="Digite seu nome completo"
            style={{ padding: '12px' }}
          />
        </div>
        <div className="form-group">
          <label>Endereço:</label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            className="form-control"
            placeholder="Digite seu endereço"
            style={{ padding: '12px' }}
          />
        </div>
        <div className="form-group">
          <label>Telefone:</label>
          <div style={{ display: 'flex' }}>
            <input
              type="text"
              value={telefone1}
              onChange={(e) => setTelefone1(e.target.value)}
              className="form-control"
              style={{ width: '30%', marginRight: '5px', padding: '12px' }}
            />
            <input
              type="text"
              value={telefone2}
              onChange={(e) => setTelefone2(e.target.value)}
              className="form-control"
              style={{ width: '30%', marginRight: '5px', padding: '12px' }}
            />
            <input
              type="text"
              value={telefone3}
              onChange={(e) => setTelefone3(e.target.value)}
              className="form-control"
              style={{ width: '30%', padding: '12px' }}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Sexo:</label>
          <select
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            className="form-control"
            style={{ padding: '10px' }}
          >
            <option value="">Selecione</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Digite seu email"
            style={{ padding: '12px' }}
          />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="form-control"
            placeholder="Digite sua senha"
            style={{ padding: '12px' }}
          />
        </div>
        <div className="form-group">
          <label>Confirmar Senha:</label>
          <input
            type="password"
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
            className="form-control"
            placeholder="Confirme sua senha"
            style={{ padding: '12px' }}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#ffc451', border: 'none' }}>Cadastrar</button>
      </form>
      {msgError && <div className="alert alert-danger mt-3">{msgError}</div>}
      {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
      <div>
        <p className="mt-3 mb-0">Quer se cadastrar como profissional?</p>
        <p className="mb-0"><a href="/cadastrar-profissional" className="fw-bold" style={{ color: 'black' }}>Cadastre-se como Profissional</a></p>
      </div>
    </div>
  );
};

export default Cadastro;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cadastro: React.FC = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone1, setTelefone1] = useState('');
  const [telefone2, setTelefone2] = useState('');
  const [telefone3, setTelefone3] = useState('');
  const [sexo, setSexo] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [msgError, setMsgError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleNomeCompletoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomeCompleto(event.target.value);
  };

  const handleEnderecoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndereco(event.target.value);
  };

  const handleTelefone1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone1(event.target.value);
  };

  const handleTelefone2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone2(event.target.value);
  };

  const handleTelefone3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone3(event.target.value);
  };

  const handleSexoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSexo(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };

  const handleConfirmSenhaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmSenha(event.target.value);
  };

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
        senha
      };
      // Simulação de função de cadastro fictícia para evitar erros de compilação
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
            onChange={handleNomeCompletoChange}
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
            onChange={handleEnderecoChange}
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
              onChange={handleTelefone1Change}
              className="form-control"
              style={{ width: '30%', marginRight: '5px', padding: '12px' }}
            />
            <input
              type="text"
              value={telefone2}
              onChange={handleTelefone2Change}
              className="form-control"
              style={{ width: '30%', marginRight: '5px', padding: '12px' }}
            />
            <input
              type="text"
              value={telefone3}
              onChange={handleTelefone3Change}
              className="form-control"
              style={{ width: '30%', padding: '12px' }}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Sexo:</label>
          <select
            value={sexo}
            onChange={handleSexoChange}
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
            onChange={handleEmailChange}
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
            onChange={handleSenhaChange}
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
            onChange={handleConfirmSenhaChange}
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

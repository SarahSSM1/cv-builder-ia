
function PersolnalInfo() {
  return (
    <section>

      <h3>Dados pessoais</h3>
      <p>Informações básicas para contato</p>

      <form action="">
        <div>
          <label htmlFor="fullName">Nome Completo</label>
          <br />
          <input type="text" name="fullName" id="fullName" placeholder='Seu nome completo'/>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" name="email" id="email" placeholder='seu.email@exemplo.com' />
        </div>

        <div>
          <label htmlFor="phone">Telefone</label>
          <br />
          <input type="tel" name="phone" id="phone" placeholder='(11) 99999-9999' />
        </div>

        <div>
          <label htmlFor="linkedin">LinkedIn</label>
          <br />
          <input type="text" name="linkedin" id="linkedin" placeholder='linkedin.com/in/seuperfil' />
        </div>

      </form>

    </section>
    
  )
}

export default PersolnalInfo
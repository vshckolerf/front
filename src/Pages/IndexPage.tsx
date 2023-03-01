import logoImg from '../assets/logo.svg'
import '../css/index.css'
import { ThemeSwitcherComponent } from '../Components/ThemeSwitcherComponent'

export function IndexPage() {

  return (
    <div className='wrapper'>
      <div id="auth">
        <img src={logoImg} id="logo"/>
        <div id="auth_inputs">
            <input type="email" id="email" className="auth_inp" required placeholder="Почта"/>
            <input type="password" id="password" className="auth_inp" required placeholder="Пароль"/>
            <button id="button">Войти</button>
        </div>
        <p id="rem_pass">Для смены пароля свяжитесь с <span className='mimbol'>@mimbol</span></p>
      </div>
      <ThemeSwitcherComponent/>
    </div>
  )
}


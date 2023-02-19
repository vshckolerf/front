import logoImg from '../assets/logo.svg'
import '../css/index.css'

export function IndexPage() {

  return (
    <>
      <div id="auth">
        <img src={logoImg} alt="" id="logo"/>
        <div id="auth_inputs">
            <input type="email" id="email" className="auth_inp" required placeholder="Почта"/>
            <input type="password" id="password" className="auth_inp" required placeholder="Пароль"/>
            <button id="button">Войти</button>
        </div>
        <p id="rem_pass">Для смены пароля свяжитесь с @mimbol</p>
    </div>
    <div className="theme_switch">
        <input type="checkbox" id="theme"/>
        <label htmlFor="theme">
            <svg id="theme_switcher" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none">
                <circle cx="16" cy="16" r="6" stroke="#535358" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path stroke="#535358" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 6V3M8.929 8.929L6.808 6.808M6 16H3M16 29v-3M25.192 25.192l-2.121-2.121M29 16h-3M8.929 23.071l-2.121 2.121M25.192 6.808l-2.12 2.121"/>
            </svg>
        </label>
    </div>
    </>
  )
}


import {useSelector} from 'react-redux'


function TestPage(){
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const user = useSelector(state => state.user)
  return <>
    <form action='/'>
    <input type='submit' value='Main'/>
    </form>
    <a href='/'><button>Return to main</button></a>
    <h1>User: {user.name}</h1>
  </>
}

export default TestPage;

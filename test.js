//React has a powerful composition model. we recommend using compositon instead of inheritance to reuse the code

//Some components don't know their children ahead of time. This is especially common for the components like sidebar and dialog 
//that represent generic "boxes"

//such component use the special children prop to pass children elements directly into their output

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.children}
        </div>
    )
}

function WelcomeDialog(porps) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
               Welcome
            </h1>
            <p className="Dialog-message">
              Thank you for visiting the spacecraft!
            </p>
        </FancyBorder>
    )
}

function SplitPane (props) {
    return (
        <div className="SplitPane">
           <div className="SplitPane-left">
             {props.left}
           </div>
           <div className="SplitPane-right">
             {props.right}
           </div>
        </div>
    )
}

function App(){
    return (
        <SplitPane 
          left={<Contact />}
          right={<Chat />}
        />
    )
}

function Dialog () {
    return (
        <FancyBorder>
           <div className="dialog-title">
             {props.title}
           </div>
           <div className="dialog-message">
             {props.message}
           </div>
        </FancyBorder>
    )
}

function WelcomeDialog (props) {
    return (
        <Dialog 
          title="Welcome"
          message="Thank you for visiting spacecraft"/>
    )
}

function Dialog(props) {
    return (
        <FancyBorder>
          <h1 className="Dialog-title">
             {props.title}
          </h1>
          <p className="Dialog-message">
              {props.message}
          </p>
          {props.children}
        </FancyBorder>
    )
}

class SignUpDialog extends React.Component {
    construtor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
        this.handleSignUp=this.handleSignUp.bind(this)
        this.state={value: ''}
    }

    render() {
        return (
            <Dialog title="Mars Exploration Program"
                     message="How should we refer to you">
            <input onChange={this.handleChange} value={this.state.value}/>
            <button onClick={this.handleSignUp}>
              Sign UP
            </button>
             </Dialog>
        )
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.value}`)
    }
}
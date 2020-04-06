import React,{Component} from 'react';
import './Questions.css'

class Questions extends Component{
    constructor(props){
        super(props);

        this.onPageLoad = this.onPageLoad.bind(this);
        this.onButtonStart = this.onButtonStart.bind(this);
        this.onButtonStop = this.onButtonStop.bind(this);
        this.onButtonReset = this.onButtonReset.bind(this);
        this.start = this.start.bind(this);


        this.state={
            timer: null,
            counter: '00',
            miliseconds: '00',
            startDisabled: true,
            stopDisabled: false,
            showing:true
        }
    }
    componentDidMount() {
        this.start();
    }


    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    start() {
        var self = this;
        let timer = setInterval(() => {
            var num = (Number(this.state.miliseconds) + 1).toString(),
                count = this.state.counter;

            if (Number(this.state.miliseconds) === 59) {
                count = (Number(this.state.counter) + 1).toString();
                num = '00';
            }

            self.setState({
                counter: count.length === 1 ? '0' + count : count,
                miliseconds: num.length === 1 ? '0' + num : num
            });
        }, 1000);
        this.setState({ timer });
    }

    onPageLoad() {

        this.start();
        this.setState({ startDisabled: true, stopDisabled: false });
    }

    
    onButtonStart() {

        this.start();
        this.setState({ startDisabled: true, stopDisabled: false });
    }


    onButtonStop() {
        clearInterval(this.state.timer);
        this.setState({ startDisabled: false, stopDisabled: true });
    }


    onButtonReset() {
        this.setState({
            timer: null,
            counter: '00',
            miliseconds: '00'
        });
    }

    render(){
        const {showing}=this.state;
        return(
            <div>
                <div id="center">
                    <ol type='a'>
                        <li><button>answer1</button></li>
                        <li><button>answer2</button></li>
                        <li><button>answer3</button></li>
                    </ol>
                <div>
                    <button onClick={() => this.setState({ showing: !showing })}>Hint</button>
                        { !showing 
                            ? <div>This is the Hint</div>
                            : null
                        }
                </div>
            </div>
                <div id="watch">
                    {this.state.counter}:{this.state.miliseconds}

                    <button title="Start" id="Button"></button>
                    <button title="Stop" id="Button"></button>
                    <button title="Reset" id="Button"></button>
                </div>
                </div>
        );
    }

}

export default Questions;
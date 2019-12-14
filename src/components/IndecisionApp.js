import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component{
    state = {  //es6 transform properties class syntax
      options: [],
        selectedOption: undefined
    };
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         options: []
    //     };
    //
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.pickAnOption = this.pickAnOption.bind(this);
    //     this.addOption = this.addOption.bind(this);
    //     this.onRemoveOption = this.onRemoveOption.bind(this);
    // }

    handleDeleteOptions = () =>{
        this.setState(() => ( {options: []} )) //wrap the object in parentheses if you want to return it inline
        //inside an arrow function without using 'return' keyword
    };

    pickAnOption = () =>{
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(prevState => {
            return {
                selectedOption: option
            }
        })
        // alert(option);
    };

    addOption = (option) => {
        if(this.state.options.indexOf(option) !== -1){
            return 'This option already exists';
        }
        this.setState(prevState => {
            let newOpts = [...prevState.options];
            newOpts.push(option);
            return {
                options: newOpts
                //or: options: prevState.options.concat([option])
            }
        })
    };

    onRemoveOption = (option) => {
        this.setState(prevState => ({
            options: prevState.options.filter((opt) => opt !== option)
        }));
    };

    onCloseModal =() =>{
        this.setState(() => {
            return {
                selectedOption: undefined
            }
        })
    };

    componentDidMount(){
        try{
            const options = JSON.parse(localStorage.getItem('options'));

            if(options) { //only update state if options is not null
                this.setState(() => ({options: options}));
            }
        }catch(error){//catch an error if json data is invalid
            //don't do anything and don't update the state
            console.log(error);
        }
    }

    componentDidUpdate(prevProps, prevState){ //fires after prop or state values change
        if(prevState.options.length !== this.state.options.length){
            //only save if previous state data doesn't match the new current state data anymore
            const jsonData = JSON.stringify(this.state.options);
            localStorage.setItem('options', jsonData);
        }
    }

    componentWillUnmount(){ //fires before the component goes away/unmounts

    }

    render(){
        const title="Indecision App";
        const subtitle="Put your life in the hands of a computer";

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        pickAnOption={this.pickAnOption}/>
                        <div className="widget">
                     <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        onRemoveOption={this.onRemoveOption}/>
                        <AddOption addOption={this.addOption}/>
                        </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    onCloseModal={this.onCloseModal}/>
            </div>
        )
    }
}

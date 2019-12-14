import React from "react";

export default class AddOption extends React.Component{ //you can export class definitions like this in line
    //old class syntax
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         error: undefined
    //     };
    //     this.onAddOption = this.onAddOption.bind(this);
    // }

    //new ES6 transform properties class syntax
    //no constructor is even needed at this point
    state ={
       error: undefined
    };

    onAddOption = (e) => {
        e.preventDefault();
        const value = e.target.elements.option.value.trim();
        if(value) {
            // console.log(value);
            const error = this.props.addOption(value);
            if(error){
                this.setState(() => {
                    return{error: error}
                })
            }else{
                this.setState(() =>{
                    return {error: undefined }
                });
                e.target.elements.option.value = '';
            }
        }else{
            this.setState(() => {
                return{ error: 'Please add a valid item'}
            })
        }
    };

    render(){
        return(
            <div>
            {this.state.error && (<p className="add-option-error">{this.state.error}</p>)}
            <form className="add-option" id="add_option_form" onSubmit={this.onAddOption}>
                <input className="add-option__input" name="option" type="text" autoComplete="off"/>
                <button className="button" type="submit">Add Option</button>
            </form>
            </div>
        )
    }
}

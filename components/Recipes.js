import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Recipes extends Component {
    constructor() {
        super();
        this.state = {
            titles: [],
        }
    }

    componentDidMount() {
        fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1")
        .then(results => {
            return results.json();
        }).then(data => {
            let titles = data.results.map((title) => {
                return(
                    <View> key={title.results}
                        <Text>{title.title}</Text>
                    </View>
                )
            })
            this.setState({titles: titles});
            console.log("state", this.state.titles);
        })
    }

    render() {
        return (
            <Text>
                {this.state.titles}
            </Text>
        );
    }
}


import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import CustomButton from '../onboarding/button';

const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
const color = isLight => backgroundColor(!isLight);

const Done = ({ isLight, ...props }) => (
  <Button
    title={'Done'}
    buttonStyle={{
      borderRadius: 15,
      backgroundColor: '#74D14C',
      paddingHorizontal: 50,
      paddingVertical: 10,
      marginTop: 25
    }}
    containerViewStyle={{
      borderRadius: 15,
      backgroundColor: '#74D14C',
      paddingHorizontal: 50,
      marginVertical: 10,
      width: 70
    }}
    textStyle={{ color: color(isLight) }}
    {...props}
    onPress={ () => props.navigation.navigate('HomeTabNavigator')}
  />
);

export default class OnboardingScreens extends Component {
    render() {
        return (
            <View style={styles.slide}>
                <Onboarding
                    bottomBarColor= {'#EAF8E4'}
                    showSkip= {false}
                    imageContainerStyles={{paddingBottom: 15}}
                    titleStyles={{color: '#E78200', fontSize: 35 }}
                    subtitleStyles={{fontSize: 20}}
                    DoneButtonComponent={Done}
                    pages={[
                        {
                            backgroundColor: '#EAF8E4',
                            image: <Image source={require('../../../assets/mini_logo2.png')} ></Image>,
                            title: 'NutriDish',
                            subtitle: 'Having trouble finding a recipe that suits your needs? NutriDish can help with that.'
                        },
                        {
                            backgroundColor: '#EAF8E4',
                            image: <Image source={require('../../../assets/mini_logo2.png')} ></Image>,
                            title: 'How to use the App',
                            subtitle: 'Search and save your favourite recipes, or get a customized meal plan based on your dietary needs.'
                        },
                        {
                            backgroundColor: '#EAF8E4',
                            image: <Image source={require('../../../assets/mini_logo2.png')} ></Image>,
                            title: 'Let\'s Get Started',
                            subtitle: 'Make a free account today to start using the app.',
                            
                        }
                    ]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
   slide: {
       flex: 1,
       backgroundColor: '#EAF8E4',
   }
});
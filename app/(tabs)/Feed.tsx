import { ScrollView, StyleSheet } from 'react-native';
import ListView from '@/components/Sections/Feed/ListView';
import ScrollAvatars from '@/components/Sections/Feed/ScrollAvatars';
import { Text } from 'react-native-paper';
import Avatar from '@/components/UI/Avatar';
import CityCard from '@/components/UI/CityCard';

const cards = [
  {
    price: 0,
    title: 'ifrane 4 days with local poeple',
    tags: ['Ifran', 'Snow', 'Winter'],
    within: 'Every Day',
    img: 'https://images.unsplash.com/photo-1712839398257-8f7ee9127998?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    price: 200,
    within: 'This weekend',
    title: 'Globale Toor on Agadir with free local food',
    tags: ['Agadir', 'Atlas', 'Local Food'],
    img: 'https://images.unsplash.com/photo-1584914584152-9b56c79aec32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    price: 400,
    title: 'Tanger One Day Tour with local food',
    tags: ['Tanger', 'Local Food', 'One Day'],
    img: 'https://images.unsplash.com/photo-1587518394973-2c4afe9d409e?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    price: 900,
    within: 'tomorow',
    title: 'ifrane 4 days with localifrane 4 days with local poeple',
    tags: ['Ifran', 'Snow', 'Winter'],
    img: 'https://images.unsplash.com/photo-1712839398257-8f7ee9127998?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const profiles = [
  {
    img: 'https://images.unsplash.com/profile-1670236743900-356b1ee0dc42image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    name: 'Clay Banks'
  },
  {
    img:'https://images.unsplash.com/profile-1708768996654-72bfac18a422?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    name:'MaJiwedeek NdewKOn'
  },
  {
    img:'https://images.unsplash.com/profile-1554635818606-e63835dd950e?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    name:'Anime ekd'
  },
  {
    img: 'https://images.unsplash.com/profile-1670236743900-356b1ee0dc42image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    name: 'Clay Banks'
  },
  {
    img:'https://images.unsplash.com/profile-1708768996654-72bfac18a422?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    name:'MaJiwedeek NdewKOn'
  },
  {
    img:'https://images.unsplash.com/profile-1554635818606-e63835dd950e?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    name:'Anime ekd'
  }
]
const cities = [
  {
    img:'https://images.unsplash.com/flagged/photo-1555169048-3c4845cfcf1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'chefchaouen'
  },
  {
    img:'https://images.unsplash.com/photo-1519594445471-0e5f86b3fb09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Taghazout'
  },
  {
    img:'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Rabat'
  },
  {
    img:'https://images.unsplash.com/photo-1559586616-361e18714958?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Sahara'
  },
  {
    img:'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name:'Tamnougalt'
  },
]

export default function TabOneScreen() {
  return (
    <>
      <ScrollView style={styles.parent}>
        <ListView horizontal={true} theme={'three'} data={cards} title='Weekend Featured' uri='' />
        <ScrollAvatars title='Most Visited Cities' theme='one' uri={''}>
          <>
            {
              cities.map((item,i)=>(
                <CityCard key={i} theme='two' image={item.img} name={item.name} />
              ))
            }
          </>
        </ScrollAvatars>
        <ListView horizontal={false} theme={'one'} data={cards} title='Latest Travels' uri='/latest' />
        <ScrollAvatars title='Most Rated Guides' theme='one' uri={''}>
          <>
            {
              profiles.map((item,i)=>(
                <Avatar key={i} avatar={true} theme='one' image={item.img} name={item.name} />
              ))
            }
          </>
        </ScrollAvatars>
        <ListView horizontal={true} theme={'two'} data={cards} title='Most Popular' uri='/popular' />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // gap: 4,
    paddingHorizontal: 4,
  },
  parent: {
    // flex: 1,
    // display: 'flex',
    // flexDirection: 'column',
    // gap: 10,
  }
});

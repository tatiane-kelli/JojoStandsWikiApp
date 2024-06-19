import React, { useEffect, useState } from 'react';
import { View, 
  Text, Image, 
  FlatList, 
  StyleSheet, 
  TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { fetchStands } from '../services/api';
import { Subscription } from 'rxjs';
import BoldText from '../components/textComponents/BoldText';
import RegularText from '../components/textComponents/RegularText';
import TitleText from '../components/textComponents/TitleText';
import styles from './styles';

function StandList() {
  const [stands, setStands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [chapterFilter, setChapterFilter] = useState('');
  const [filteredStands, setFilteredStands] = useState([]);

  useEffect(() => {
    const subscription = fetchStands().subscribe({
      next: data => {
        setStands(data);
        setFilteredStands(data);
        setLoading(false);
      },
      error: error => {
        console.error(error);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    filterStands();
  }, [search, chapterFilter]);

  function filterStands() {
    let filtered = stands;

    if (search) {
      filtered = filtered.filter(stand => stand.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (chapterFilter) {
      filtered = filtered.filter(stand => stand.chapter.toLowerCase().includes(chapterFilter.toLowerCase()));
    }
    setFilteredStands(filtered);
  }

  const renderStand = ({ item }) => (
    <View style={styles.card}>
       <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>
        <TitleText>{item.name}</TitleText>
      </Text>
      <Text style={styles.japaneseName}>{item.japaneseName}</Text>
      <Text style={styles.standInfo}>
        <BoldText>Habilidades:</BoldText> 
        <RegularText> {item.abilities}</RegularText>
      </Text>
      <Text style={styles.standInfo}>
        <BoldText>Aparições:</BoldText>
        <RegularText> {item.chapter}</RegularText>
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquise Stands"
        value={search}
        onChangeText={setSearch}
        placeholderTextColor="#666"
      />
      <View style={styles.filterContainer}>
        <Picker
          selectedValue={chapterFilter}
          style={styles.picker}
          onValueChange={(itemValue) => setChapterFilter(itemValue)}
        >
          <Picker.Item style={styles.pickerItem} label="Filtrar por parte" value="" />
          <Picker.Item style={styles.pickerItem} label="Stardust Crusaders" value="Stardust Crusaders" />
          <Picker.Item style={styles.pickerItem} label="Diamond is Unbreakable" value="Diamond is Unbreakable" />
          <Picker.Item style={styles.pickerItem} label="Vento Aureo" value="Vento Aureo" />
          <Picker.Item style={styles.pickerItem} label="Stone Ocean" value="Stone Ocean" />
          <Picker.Item style={styles.pickerItem} label="Steel Ball Run" value="Steel Ball Run" />
          <Picker.Item style={styles.pickerItem} label="Jojolion" value="Jojolion" />
          <Picker.Item style={styles.pickerItem} label="Jojolands" value="Jojolands" />
        </Picker>
      </View>
      {loading ? <Text>Carregando...</Text> : (
        <FlatList
          data={filteredStands}
          renderItem={renderStand}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default StandList;

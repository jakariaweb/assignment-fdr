/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';
import {
  ArrowCarrotLeftIcon,
  BellIcon,
  ErrorCircleIcon,
  PadlockIcon,
} from '../../../../assets/icons';
import colors from 'tailwindcss/colors';
import {useIsFocused} from '@react-navigation/native';
import {getFdrPackage} from '../../../services/fdr';
import {overlayImg} from '../../../components';
import Spinner from 'react-native-loading-spinner-overlay';

const screenWidth = Dimensions.get('window').width;

const Home = ({navigation}) => {
  const isFocused = useIsFocused();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [fdrPackage, setFdrPackage] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const comingSoonPackages = [
    {
      ID: 'coming_soon_1',
      Name: 'Future Package 1',
      PriceStart: 0,
      PriceEnd: 0,
      MonthlyReturn: 'Coming Soon',
      Bonus: 'Coming Soon',
      comingSoon: true,
    },
    {
      ID: 'coming_soon_2',
      Name: 'Future Package 2',
      PriceStart: 0,
      PriceEnd: 0,
      MonthlyReturn: 'Coming Soon',
      Bonus: 'Coming Soon',
      comingSoon: true,
    },
    {
      ID: 'coming_soon_3',
      Name: 'Future Package 3',
      PriceStart: 0,
      PriceEnd: 0,
      MonthlyReturn: 'Coming Soon',
      Bonus: 'Coming Soon',
      comingSoon: true,
    },
  ];

  const getData = async () => {
    try {
      setLoading(true);
      const response = await getFdrPackage(setError);

      if (response && response?.status === 200) {
        const combinedData = [...response?.data, ...comingSoonPackages];
        setFdrPackage(combinedData);
        setLoading(false);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('Error fetching data:', err);
    }
  };

  useEffect(() => {
    if (isFocused) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  const refreshData = async () => {
    try {
      setRefreshing(true);
      const response = await getFdrPackage(setError);

      if (response && response?.status === 200) {
        const combinedData = [...response?.data, ...comingSoonPackages];
        setFdrPackage(combinedData);
        setRefreshing(false);
      }
      setRefreshing(false);
    } catch (err) {
      setRefreshing(false);
      console.log('Error fetching data:', err);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-custom-woodsmoke-500">
      {loading ? (
        <Spinner visible={loading} color="#00788e" />
      ) : (
        <View className="px-3 flex-1">
          <View className="flex-row justify-between items-center my-3">
            <TouchableOpacity>
              <ArrowCarrotLeftIcon
                width={25}
                height={25}
                color={colors.white}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <BellIcon height={'20'} width={'20'} color={colors.white} />
            </TouchableOpacity>
          </View>

          <Text className="text-white text-lg my-1 font-PoppinsMedium">
            Get FDR Package
          </Text>

          <View className="bg-custom-theme-blue-500 rounded-xl px-6 py-5 mt-3 mb-2">
            <View className="flex-row justify-around items-start">
              <ErrorCircleIcon width={20} height={20} color={colors.white} />
              <View className="flex-row flex-wrap ml-5">
                <Text className="font-PoppinsRegular text-xs text-white">
                  You are using
                </Text>
                <Text className="font-PoppinsSemiBold text-xs text-white ml-1">
                  free version only for 30days.
                </Text>
                <Text className="font-PoppinsRegular text-xs text-white">
                  Get package and build community.
                </Text>
              </View>
            </View>
          </View>

          <View className="flex-1 max-h-fit">
            <ScrollView
              className="flex-1 my-5"
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={refreshData}
                  colors={[colors.blue[400]]}
                />
              }>
              <View className="flex-1">
                {fdrPackage?.length === 0 ? (
                  <View
                    className="flex-1 justify-center items-center"
                    style={{
                      marginTop: '80%',
                    }}>
                    <Text className="text-xs font-DMSansMedium text-white text-center leading-5">
                      Looks like no data found!
                    </Text>
                  </View>
                ) : (
                  <>
                    <View className="flex-row flex-wrap justify-between">
                      <View className="flex-row flex-wrap justify-between">
                        {fdrPackage?.map((fdr, i) => (
                          <View
                            key={fdr.ID}
                            className="h-60 rounded-lg flex flex-col mb-3 w-full"
                            style={{width: screenWidth / 2 - 20}}>
                            {fdr.comingSoon ? (
                              <View className="h-full rounded-lg flex justify-center items-center bg-custom-theme-blue-600">
                                <View className="flex justify-center items-center z-10">
                                  <PadlockIcon
                                    width={70}
                                    height={70}
                                    color="white"
                                  />
                                  <Text className="text-white text-lg font-PoppinsSemiBold capitalize text-center mt-4">
                                    Coming Soon
                                  </Text>
                                </View>
                              </View>
                            ) : (
                              <LinearGradient
                                colors={['#3D3D3D', '#00457C']}
                                className="h-full rounded-lg"
                                start={{x: 0, y: 0}}
                                end={{x: 1, y: 0}}>
                                {fdr?.Name === 'GOLD pACKAGE' && (
                                  <View className="justify-center items-center py-1 bg-custom-theme-blue-500 rounded-t-md">
                                    <Text className="font-PoppinsRegular text-[8px] text-white">
                                      Recommended
                                    </Text>
                                  </View>
                                )}
                                <View className="h-full w-full flex-1 justify-center">
                                  <Text className="text-white text-xs font-PoppinsRegular capitalize text-center">
                                    {fdr?.Name === 'platinum'
                                      ? 'Platinum Package'
                                      : fdr?.Name}
                                  </Text>

                                  <Text className="text-white text-md font-PoppinsSemiBold uppercase mt-1 mb-2 text-center">
                                    ${fdr?.PriceStart}
                                    {fdr?.PriceEnd === 0
                                      ? '+'
                                      : ' to $' + fdr?.PriceEnd}
                                  </Text>

                                  <View className="mx-4">
                                    <TouchableOpacity className="bg-custom-theme-blue-500 justify-center items-center px-10 py-1 rounded-full">
                                      <Text className="text-white text-xs font-PoppinsRegular">
                                        Select
                                      </Text>
                                    </TouchableOpacity>

                                    <View className="flex-row items-center mt-2">
                                      <Text className="text-white text-[10px] font-PoppinsSemiBold">
                                        Profit:
                                      </Text>
                                      <Text className="text-white text-[9px] font-PoppinsRegular ml-1">
                                        {fdr?.MonthlyReturn}
                                      </Text>
                                    </View>

                                    <View className="flex-row items-center">
                                      <Text className="text-white text-[10px] font-PoppinsSemiBold">
                                        Maturity:
                                      </Text>
                                      <Text className="text-white text-[9px] font-PoppinsRegular ml-1">
                                        1 year or 2 years
                                      </Text>
                                    </View>

                                    <View className="flex-row items-center">
                                      <Text className="text-white text-[10px] font-PoppinsSemiBold">
                                        Bonus:
                                      </Text>
                                      <Text className="text-white text-[9px] font-PoppinsRegular ml-1">
                                        {fdr?.Bonus} tokens bonus
                                      </Text>
                                    </View>

                                    <View className="flex-row items-center flex-wrap flex-shrink mr-1">
                                      <Text className="text-white text-[10px] font-PoppinsSemiBold">
                                        Maturity bonus:
                                      </Text>
                                      <Text className="text-white text-[9px] font-PoppinsRegular ml-1">
                                        {fdr?.MonthlyReturn}
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                              </LinearGradient>
                            )}
                          </View>
                        ))}
                      </View>
                    </View>
                  </>
                )}
              </View>

              <View className="mb-80" />
            </ScrollView>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export {Home};

/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  ArrowCarrotLeftIcon,
  BellIcon,
  CopyIcon,
  DollerIcon,
  EyeIcon,
  LinkIcon,
  RatingFillIcon,
  RatingIcon,
  ShareIcon,
  StreamIcon,
  TeamIcon,
  UpgradeIcon,
  UserActiveIcon,
  UserFillIcon,
  UserIcon,
  UserIcon2,
  UserInactiveIcon,
  WalletIcon,
  WalletIcon2,
} from '../../../../assets/icons';
import colors from 'tailwindcss/colors';
import {streamImg, userImg} from '../../../components/images';
import moment from 'moment';

const screenWidth = Dimensions.get('window').width;

const Profile = ({navigation}) => {
  const userData = {
    name: 'Daniel Quite',
    username: 'paypeoples.com/@usernaem',
    img: userImg,
    totalEarnings: 7034.0,
    sponsoredBy: 'Nastia Diadenchuk',
    personalAffTeam: 50,
    totalTeamInvestment: 6240.0,
    teamMembers: {
      activeMembers: 40,
      inactiveMembers: 25,
    },
    activatedOn: '2022-10-27T14:29:00.963513Z',
    seflRefLink: {link: 'paypeoples.com/@usernaem', text: 'AB2356'},
  };

  return (
    <SafeAreaView className="flex-1 px-3 bg-custom-woodsmoke-500">
      <View className="flex-row justify-between items-center my-2">
        <TouchableOpacity>
          <ArrowCarrotLeftIcon width={25} height={25} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <BellIcon height={'20'} width={'20'} color={colors.white} />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        <View className="my-10 relative">
          <View className="relative">
            <View className="absolute z-30 top-[-40px] mb-[-50px]">
              <Image
                source={userImg}
                style={{
                  width: 85,
                  height: 85,
                  right: screenWidth <= 390 ? '-138%' : '-160%',
                }}
              />
            </View>

            <View
              className="z-10 rounded-lg bg-custom-theme-gray-500 w-5/6 mx-auto"
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
              <View className="justify-center items-center pt-12 pb-1">
                <Text className="font-PoppinsBold text-lg text-white -mt-3">
                  {userData?.name}
                </Text>
                <Text className="font-PoppinsRegular text-xs text-gray-500">
                  {userData?.username}
                </Text>
                <View className="flex-row my-2">
                  <View className="mx-[2px]">
                    <RatingFillIcon height={15} width={15} />
                  </View>
                  <View className="mx-[2px]">
                    <RatingFillIcon height={15} width={15} />
                  </View>
                  <View className="mx-[2px]">
                    <RatingIcon height={15} width={15} />
                  </View>
                  <View className="mx-[2px]">
                    <RatingIcon height={15} width={15} />
                  </View>
                  <View className="mx-[2px]">
                    <RatingIcon height={15} width={15} />
                  </View>
                  <View className="mx-[2px]">
                    <RatingIcon height={15} width={15} />
                  </View>
                  <View className="mx-[2px]">
                    <RatingIcon height={15} width={15} />
                  </View>
                </View>
              </View>

              <View className="w-full h-[1px] bg-custom-masala-500" />

              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center border-r border-r-custom-masala-500 py-3 px-2">
                  <View className="mx-1">
                    <UserFillIcon height={8} width={10} color={colors.white} />
                  </View>
                  <Text className="font-PoppinsRegular text-[8px] text-white mr-1">
                    Personal info
                  </Text>
                </View>
                <View className="flex-row justify-center items-center border-r border-r-custom-masala-500 py-3 pr-5">
                  <View className="mx-1">
                    <WalletIcon2
                      height={8}
                      width={10}
                      color={colors.gray[400]}
                    />
                  </View>
                  <Text className="font-PoppinsRegular text-[8px] text-gray-400 mr-1">
                    Wallets
                  </Text>
                </View>
                <View className="flex-row items-center justify-center  py-3 px-2 -left-4">
                  <View className="mx-1">
                    <Image source={streamImg} style={{width: 10, height: 10}} />
                  </View>
                  <Text className="font-PoppinsRegular text-[8px] text-gray-400 mr-1">
                    Stream
                  </Text>
                </View>
              </View>
            </View>

            <View className="z-0 bg-custom-theme-gray-500 w-full rounded-lg mx-auto  pt-24 pb-4 -top-20">
              <View className="rounded-lg bg-custom-woodsmoke-500 w-5/6 mx-auto py-2 px-3 flex-row justify-between items-center mb-3">
                <View className="flex-col justify-center">
                  <Text className="text-white text-xs font-PoppinsRegular">
                    $ Total Earnings
                  </Text>
                  <Text className="text-gray-400 text-xs font-PoppinsBold ml-3 my-1">
                    ${userData?.totalEarnings}
                  </Text>
                </View>

                <TouchableOpacity className="flex-row justify-center items-center">
                  <EyeIcon width={10} height={10} color={colors.blue[600]} />
                  <Text className="text-blue-600 text-[9px] font-PoppinsRegular ml-1">
                    View
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="rounded-lg bg-custom-woodsmoke-500 w-5/6 mx-auto py-2 px-3 flex-row justify-between items-center mb-3">
                <View className="flex-col justify-center">
                  <View className="flex-row justify-start items-center">
                    <UserIcon2
                      height={12}
                      width={12}
                      color={colors.blue[600]}
                    />
                    <Text className="text-white text-xs font-PoppinsRegular ml-1">
                      Sponsored by
                    </Text>
                  </View>
                  <Text className="text-gray-400 text-xs font-PoppinsRegular ml-4 my-1">
                    {userData?.sponsoredBy}
                  </Text>
                </View>

                <TouchableOpacity className="flex-row justify-center items-center">
                  <EyeIcon width={10} height={10} color={colors.blue[600]} />
                  <Text className="text-blue-600 text-[9px] font-PoppinsRegular ml-1">
                    View
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="rounded-lg bg-custom-woodsmoke-500 w-5/6 mx-auto py-2 px-3 flex-row justify-between items-center mb-3">
                <View className="flex-col justify-center">
                  <View className="flex-row justify-start items-center">
                    <UserIcon2
                      height={12}
                      width={12}
                      color={colors.blue[600]}
                    />
                    <Text className="text-white text-xs font-PoppinsRegular ml-1">
                      Personal affilate team
                    </Text>
                  </View>
                  <Text className="text-gray-400 text-xs font-PoppinsRegular ml-4 my-1">
                    {userData?.personalAffTeam} Allies
                  </Text>
                </View>

                <TouchableOpacity className="flex-row justify-center items-center">
                  <EyeIcon width={10} height={10} color={colors.blue[600]} />
                  <Text className="text-blue-600 text-[9px] font-PoppinsRegular ml-1">
                    View
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="rounded-lg bg-custom-woodsmoke-500 w-5/6 mx-auto py-2 px-3 flex-row justify-between items-center mb-3">
                <View className="flex-col justify-center">
                  <View className="flex-row justify-start items-center">
                    <TeamIcon height={12} width={12} color={colors.blue[600]} />
                    <Text className="text-white text-xs font-PoppinsRegular ml-1">
                      Total team investment
                    </Text>
                  </View>
                  <Text className="text-gray-400 text-xs font-PoppinsRegular ml-4 my-1">
                    ${userData?.totalTeamInvestment}
                  </Text>
                </View>

                <TouchableOpacity className="flex-row justify-center items-center">
                  <EyeIcon width={10} height={10} color={colors.blue[600]} />
                  <Text className="text-blue-600 text-[9px] font-PoppinsRegular ml-1">
                    View
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="rounded-lg bg-custom-woodsmoke-500 w-5/6 mx-auto py-2 px-3 mb-3">
                <View className="flex-col justify-center">
                  <View className="flex-row justify-start items-center">
                    <TeamIcon height={12} width={12} color={colors.blue[600]} />
                    <Text className="text-white text-xs font-PoppinsRegular ml-1">
                      Team members
                    </Text>
                  </View>

                  <View className="flex-row justify-between items-center ml-4">
                    <View className="flex-row items-center">
                      <UserActiveIcon
                        height={12}
                        width={12}
                        color={colors.blue[600]}
                      />
                      <Text className="text-gray-400 text-xs font-PoppinsRegular ml-1 my-1">
                        Active
                      </Text>
                    </View>

                    <Text className="text-gray-400 text-xs font-PoppinsRegular ml-1 my-1">
                      {userData?.teamMembers.activeMembers}
                    </Text>
                  </View>
                  <View className="flex-row justify-between items-center ml-4">
                    <View className="flex-row items-center">
                      <UserInactiveIcon
                        height={12}
                        width={12}
                        color={colors.blue[600]}
                      />
                      <Text className="text-gray-400 text-xs font-PoppinsRegular ml-1 my-1">
                        Inactive
                      </Text>
                    </View>

                    <Text className="text-gray-400 text-xs font-PoppinsRegular ml-1 my-1">
                      {userData?.teamMembers.inactiveMembers}
                    </Text>
                  </View>
                </View>
              </View>

              <View className="rounded-lg bg-custom-woodsmoke-500 w-5/6 mx-auto py-2 px-3 flex-row justify-between items-center mb-3">
                <View className="flex-col justify-center">
                  <View className="flex-row justify-start items-center">
                    <UserActiveIcon
                      height={12}
                      width={12}
                      color={colors.blue[600]}
                    />
                    <Text className="text-white text-xs font-PoppinsRegular ml-1">
                      Activated on
                    </Text>
                  </View>
                  <Text className="text-gray-400 text-xs font-PoppinsRegular ml-4 my-1">
                    {moment(userData?.activatedOn).format('DD-MMM-YY')}
                  </Text>
                </View>

                <TouchableOpacity className="flex-row justify-center items-center">
                  <UpgradeIcon
                    width={10}
                    height={10}
                    color={colors.blue[600]}
                  />
                  <Text className="text-blue-600 text-[9px] font-PoppinsRegular ml-1">
                    Upgrade
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="rounded-lg bg-custom-woodsmoke-500 w-5/6 mx-auto py-2 px-3 flex-row justify-between items-center mb-3">
                <View className="flex-col justify-center">
                  <View className="flex-row justify-start items-center">
                    <LinkIcon height={12} width={12} color={colors.blue[600]} />
                    <Text className="text-white text-xs font-PoppinsRegular ml-1">
                      Self ref link
                    </Text>
                  </View>
                  <Text className="text-gray-400 text-xs font-PoppinsRegular ml-4 my-1">
                    {userData?.seflRefLink?.text}
                  </Text>
                </View>

                <View className="flex-row justify-between items-center">
                  <TouchableOpacity className="flex-row justify-center items-center">
                    <CopyIcon width={10} height={10} color={colors.blue[600]} />
                    <Text className="text-blue-600 text-[9px] font-PoppinsRegular ml-1">
                      Copy
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity className="flex-row justify-center items-center ml-2">
                    <ShareIcon
                      width={10}
                      height={10}
                      color={colors.blue[600]}
                    />
                    <Text className="text-blue-600 text-[9px] font-PoppinsRegular ml-1">
                      Share
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export {Profile};

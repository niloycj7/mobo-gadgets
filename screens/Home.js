import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const Home = ({ navigation }) => {

    // Dummy Datas

    const initialCurrentLocation = {
        streetName: "Kuching",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Apple",
            icon: icons.iphone,
        },
        {
            id: 2,
            name: "Google Pixel",
            icon: icons.google,
        },
        {
            id: 3,
            name: "Oneplus",
            icon: icons.oneplus,
        },
        {
            id: 4,
            name: "Realme",
            icon: icons.realme,
        },
        {
            id: 5,
            name: "Samsung",
            icon: icons.samsung,
        },
        {
            id: 6,
            name: "Xiaomi",
            icon: icons.xiaomi,
        },
        // {
        //     id: 7,
        //     name: "Snacks",
        //     icon: icons.fries,
        // },
        // {
        //     id: 8,
        //     name: "Sushi",
        //     icon: icons.sushi,
        // },
        // {
        //     id: 9,
        //     name: "Desserts",
        //     icon: icons.donut,
        // },
        // {
        //     id: 10,
        //     name: "Drinks",
        //     icon: icons.drink,
        // },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Iphone 12 Pro Max",
            rating: 5.0,
            categories: [1],
            priceRating: expensive,
            price: 999,
            photo: images.iphone12proMax,
            // duration: "30 - 45 min",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    phoneId: 1,
                    name: "Pacific Blue iPhone 12 Pro Max",
                    photo: images.iphone12proMaxB,
                    description: "Distinctive and dark, the brand new Pacific Blue hue looks fabulous.",
                    calories: 200,
                    price: 999
                },
                {
                    phoneId: 2,
                    name: "Graphite iPhone 12 Pro Max",
                    photo: images.iphone12proMaxG,
                    description: "Iconic is a word to describe the Apple iPhone.",
                    calories: 250,
                    price: 999
                },
                {
                    phoneId: 3,
                    name: "Silver iPhone 12 Pro",
                    photo: images.iphone12proMaxS,
                    description: "Nearly as iconic as Graphite, Silver has been a popular iPhone color choice for many years.",
                    calories: 194,
                    price: 999
                }
            ]
        },
        {
            id: 2,
            name: "Samsung Galaxy S21 Ultra 5G",
            rating: 4.9,
            categories: [5],
            priceRating: expensive,
            photo: images.samsungS21UltraG,
            duration: "15 - 20 min",
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    phoneId: 4,
                    name: "Galaxy S21 Ultra 5G - Phantom Violet",
                    photo: images.samsungS21UltraGVi,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    calories: 250,
                    price: 870
                },
                {
                    phoneId: 5,
                    name: "Galaxy S21 Ultra 5G - Phantom Gray",
                    photo: images.samsungS21UltraGGr,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    calories: 250,
                    price: 870
                },
                {
                    phoneId: 6,
                    name: "Galaxy S21 Ultra 5G - Phantom Silver",
                    photo: images.samsungS21UltraGSi,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    calories: 100,
                    price: 870
                }
            ]
        },
        {
            id: 3,
            name: "Google Pixel 5",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.pixel5,
            duration: "20 - 25 min",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                // {
                //     phoneId: 8,
                //     name: "Chicago Style Hot Dog",
                //     photo: images.chicago_hot_dog,
                //     description: "Fresh tomatoes, all beef hot dogs",
                //     calories: 100,
                //     price: 20
                // }
                {
                    phoneId: 7,
                    name: "Galaxy S21 Ultra 5G - Phantom Violet",
                    photo: images.samsungS21UltraGVi,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    calories: 250,
                    price: 870
                },
                {
                    phoneId: 8,
                    name: "Galaxy S21 Ultra 5G - Phantom Gray",
                    photo: images.samsungS21UltraGGr,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    calories: 250,
                    price: 870
                },
                {
                    phoneId: 9,
                    name: "Galaxy S21 Ultra 5G - Phantom Silver",
                    photo: images.samsungS21UltraGSi,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    calories: 100,
                    price: 870
                }
            ]
        },
        {
            id: 4,
            name: "ByProgrammers Sushi",
            rating: 4.8,
            categories: [8],
            priceRating: expensive,
            photo: images.japanese_restaurant,
            duration: "10 - 15 min",
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Ahmad"
            },
            menu: [
                // {
                //     phoneId: 9,
                //     name: "Sushi sets",
                //     photo: images.sushi,
                //     description: "Fresh salmon, sushi rice, fresh juicy avocado",
                //     calories: 100,
                //     price: 50
                // }
                {
                    phoneId: 10,
                    name: "Galaxy S21 Ultra 5G - Phantom Violet",
                    photo: images.samsungS21UltraGVi,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    calories: 250,
                    price: 870
                },
                {
                    phoneId: 11,
                    name: "Galaxy S21 Ultra 5G - Phantom Gray",
                    photo: images.samsungS21UltraGGr,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    calories: 250,
                    price: 870
                },
                {
                    phoneId: 12,
                    name: "Galaxy S21 Ultra 5G - Phantom Silver",
                    photo: images.samsungS21UltraGSi,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    calories: 100,
                    price: 870
                }
            ]
        },
        {
            id: 5,
            name: "ByProgrammers Cuisine",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.noodle_shop,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                // {
                //     phoneId: 10,
                //     name: "Kolo Mee",
                //     photo: images.kolo_mee,
                //     description: "Noodles with char siu",
                //     calories: 200,
                //     price: 5
                // },
                // {
                //     phoneId: 11,
                //     name: "Sarawak Laksa",
                //     photo: images.sarawak_laksa,
                //     description: "Vermicelli noodles, cooked prawns",
                //     calories: 300,
                //     price: 8
                // },
                // {
                //     phoneId: 12,
                //     name: "Nasi Lemak",
                //     photo: images.nasi_lemak,
                //     description: "A traditional Malay rice dish",
                //     calories: 300,
                //     price: 8
                // },
                // {
                //     phoneId: 13,
                //     name: "Nasi Briyani with Mutton",
                //     photo: images.nasi_briyani_mutton,
                //     description: "A traditional Indian rice dish with mutton",
                //     calories: 300,
                //     price: 8
                // },

                {
                    phoneId: 13,
                    name: "Galaxy S21 Ultra 5G - Phantom Violet",
                    photo: images.samsungS21UltraGVi,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    calories: 250,
                    price: 870
                },
                {
                    phoneId: 14,
                    name: "Galaxy S21 Ultra 5G - Phantom Gray",
                    photo: images.samsungS21UltraGGr,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    calories: 250,
                    price: 870
                },
                {
                    phoneId: 15,
                    name: "Galaxy S21 Ultra 5G - Phantom Silver",
                    photo: images.samsungS21UltraGSi,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    calories: 100,
                    price: 870
                }

            ]
        },
        {

            id: 6,
            name: "ByProgrammers Dessets",
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: images.kek_lapis_shop,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                // {
                //     phoneId: 12,
                //     name: "Teh C Peng",
                //     photo: images.teh_c_peng,
                //     description: "Three Layer Teh C Peng",
                //     calories: 100,
                //     price: 2
                // },
                // {
                //     phoneId: 13,
                //     name: "ABC Ice Kacang",
                //     photo: images.ice_kacang,
                //     description: "Shaved Ice with red beans",
                //     calories: 100,
                //     price: 3
                // },
                // {
                //     phoneId: 14,
                //     name: "Kek Lapis",
                //     photo: images.kek_lapis,
                //     description: "Layer cakes",
                //     calories: 300,
                //     price: 20
                // }
                {
                    phoneId: 16,
                    name: "Galaxy S21 Ultra 5G - Phantom Violet",
                    photo: images.samsungS21UltraGVi,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    calories: 250,
                    price: 870
                },
                {
                    phoneId: 17,
                    name: "Galaxy S21 Ultra 5G - Phantom Gray",
                    photo: images.samsungS21UltraGGr,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    calories: 250,
                    price: 870
                },
                {
                    phoneId: 18,
                    name: "Galaxy S21 Ultra 5G - Phantom Silver",
                    photo: images.samsungS21UltraGSi,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    calories: 100,
                    price: 870
                }
            ]

        }


    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>MoboGadgets</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$870</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;
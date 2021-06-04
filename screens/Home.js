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
        streetName: "Dhanmondi-MGshop",
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
            name: "Huawei",
            icon: icons.huawei,
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
        {
            id: 7,
            name: "Asus",
            icon: icons.asus,
        }
    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const productData = [
        {
            id: 1,

            name: "Iphone 12 Pro Max",
            rating: 5.0,
            categories: [1],
            priceRating: expensive,
            price: 999,
            photo: images.iphone12proMax,

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
                    price: 999
                },
                {
                    phoneId: 2,
                    name: "Graphite iPhone 12 Pro Max",
                    photo: images.iphone12proMaxG,
                    description: "Iconic is a word to describe the Apple iPhone.",
                    price: 999
                },
                {
                    phoneId: 3,
                    name: "Silver iPhone 12 Pro",
                    photo: images.iphone12proMaxS,
                    description: "Nearly as iconic as Graphite, Silver has been a popular iPhone color choice for many years.",
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
                    price: 870
                },
                {
                    phoneId: 5,
                    name: "Galaxy S21 Ultra 5G - Phantom Gray",
                    photo: images.samsungS21UltraGGr,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    price: 870
                },
                {
                    phoneId: 6,
                    name: "Galaxy S21 Ultra 5G - Phantom Silver",
                    photo: images.samsungS21UltraGSi,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    price: 870
                }
            ]
        },
        {
            id: 3,
            name: "Google Pixel 5XL",
            rating: 4.74,
            categories: [2],
            priceRating: expensive,
            photo: images.pixel5,
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    phoneId: 7,
                    name: "Google Pixel 5 XL Black",
                    photo: images.pixel5Bl,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    price: 550
                },
                {
                    phoneId: 8,
                    name:"Google Pixel 5 XL Sorta Stage",
                    photo: images.pixel5S,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    price: 550
                },
            ]
        },
        {
            id: 4,
            name: "OnePlus 9R",
            rating: 4.9,
            categories: [3],
            priceRating: expensive,

            photo: images.oneplus9R,
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Ahmad"
            },
            menu: [
                {
                    phoneId: 9,
                    name: "OnePlus 9R Carbon Black",
                    photo: images.oneplus9RC,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    price: 594.99
                },
                {
                    phoneId: 10,
                    name: "OnePlus 9R Lake Blue",
                    photo: images.oneplus9RL,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    price: 594.99
                }
            ]
        },
        {
            id: 5,
            name: "Huawei Mate 40E",
            rating: 4.85,
            categories: [4],
            priceRating: affordable,

            photo: images.huawei40,
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [

                {
                    phoneId: 11,
                    name: "Huawei Mate 40E Black",
                    photo: images.huawei40B,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    price: 714.00
                },
                {
                    phoneId: 12,
                    name: "Huawei Mate 40E Silver",
                    photo: images.huawei40S,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    price: 714.00
                },
                {
                    phoneId: 13,
                    name: "Huawei Mate 40E White",
                    photo: images.huawei40W,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    price: 714.00
                }

            ]
        },
        {

            id: 6,
            name: "Redmi Note 10 Pro 5G",
            rating: 4.5,
            categories: [6],
            priceRating: affordable,
            photo: images.redmiNote10Pro,
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [ 
                {
                    phoneId: 14,
                    name: "Redmi Note 10 Pro Onyx Gray",
                    photo: images.redmiNote10ProOnx,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    price: 279
                },
                {
                    phoneId: 15,
                    name: "Redmi Note 10 Pro Glacier Blue",
                    photo: images.redmiNote10ProGl,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    price: 280
                },
                {
                    phoneId: 16,
                    name: "Redmi Note 10 Pro Gradient Bronze",
                    photo: images.redmiNote10ProGb,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    price: 279
                }
            ]

        },

        {

            id: 7,
            name: "Asus Zenfone 7 Max Pro",
            rating: 4.8,
            categories: [7],
            priceRating: affordable,
            photo: images.asusZenfone7maxPro,
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [ 
                {
                    phoneId: 17,
                    name: "Asus Zenfone 7 Max Pro Aurora Black",
                    photo: images.asusZenfone7maxProAu,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    price: 648.99
                },
                {
                    phoneId: 18,
                    name: "Asus Zenfone 7 Max Pro Pastel White",
                    photo: images.asusZenfone7maxProPa,
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    price: 648.99
                }
            ]

        }


    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    // const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [products, setProducts] = React.useState(productData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let productList = productData.filter(a => a.categories.includes(category.id))

        setProducts(productList)

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
                        source={icons.cellphone}
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
                        source={icons.store}
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

    function renderProductList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Product", {
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
                data={products}
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
            {renderProductList()}
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
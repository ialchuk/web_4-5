import party from '../img/party.jpg';
import happyWayTravel from '../img/happy-way-travel.jpg';
import spa from '../img/spa-service.jpg';
import baggy from '../img/baggy.png';
import paintball from '../img/paintball.jpeg';
import post from '../img/post.png';

const SETPOSTTEXT = 'SETPOSTTEXT';
const FINDPOST = 'FINDPOST';
const DELETEPOST = 'DELETEPOST';
const ADDPOST = 'ADDPOST';
const SETTITLETEXT = 'SETTITLETEXT';
const SETDESCRIPTIONTEXT = 'SETDESCRIPTIONTEXT';
const LOADPHOTO = 'LOADPHOTO';
const EDITPOST = 'EDITPOST';
const SELECTPOST = 'SELECTPOST';
const SINGLEPOST = 'SINGLEPOST';

const initState = {
    posts: [
        {
            id: 1,
            title: '!FestRepublic party',
            photo: party,
            body: '!FestRepublic is a city within a city, a new modern space, right behind the Demolition Park,' +
                ' next to the Castle Hill. 20 minutes walk from the Market Square. Festivals, parties, themed' +
                ' events take place here, top DJs from all over the world and Ukrainian bands perform.',
            date: 'November 25, 2020'
        },
        {
            id: 2,
            title: 'Bus tour in America with Happy Way Travel paintball',
            photo: happyWayTravel,
            body: 'A journey that will surely bring a crazy drive and an ocean of adventure.' +
                'From dizzying New York through incredible Chicago right to sunny California, rush along the roads' +
                ' of the legendary Route 66 and American highways, feel the infinity of the Grand Canyon, ' +
                'explosive parties and Las Vegas casinos, experience the fearlessness of Texas cowboys and survive ' +
                'in Death Valley, light up the Hollywood and Hollywood film studio Plunge headlong into the ' +
                'best travel experience in America.',
            date: 'November 11, 2020'
        },
        {
            id: 3,
            title: 'Spa service waite for you paintball',
            photo: spa,
            body: 'Immerse yourself in the world of SPA from our salon - and your mind, body and spirit ' +
                'will experience fantastic new sensations. In an exquisite combination of the nature of the ' +
                'islands, in combination with an original combination of rituals and massages, an unearthly pleasure' +
                ' awaits you. Coming to us, you will find yourself in a fairy tale that will help you forget about ' +
                'your problems.',
            date: 'October 30, 2020'
        },
        {
            id: 4,
            title: 'Extreme active recreation with us',
            photo: baggy,
            body: 'We carry out any options for extreme recreation in the Lviv and not only, rest in the Carpathians, ' +
                'climbing a mountain, walking in the woods, trekking Turkey, trips to the seashore, skiing or ' +
                'snowboarding and much more! We also know where and how to paraglide, jump with a rope, jump with a ' +
                'parachute and fly an airplane.',
            date: 'October 24, 2020'
        },
        {
            id: 5,
            title: 'Paintball',
            photo: paintball,
            body: 'Play a dynamic paintball game, get into the atmosphere of a real battle on specially owned places',
            date: 'October 8, 2020'
        },
    ],
    searchPostText: '',
    searchPostsResult: null,
    addPostTitleOnChange: '',
    addPostDescriptionOnChange: '',
    loadPhoto: null,
    selectedPost: null,
    singlePosts: null,
}

const postsReducer = (state = initState, action) => {
    const month = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September' , 'October' , 'November', 'December']
    let now = new Date();
    let date = `${month[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`
    switch (action.type) {
        case SETPOSTTEXT: {
            return { ...state, searchPostText: action.text }
        }
        case SETTITLETEXT: {
            return { ...state, addPostTitleOnChange: action.text }
        }
        case SETDESCRIPTIONTEXT: {
            return { ...state, addPostDescriptionOnChange: action.text }
        }
        case LOADPHOTO: {
            return { ...state, loadPhoto: action.photo }
        }
        case ADDPOST: {
            let now = new Date();
            let date = `${month[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`
            let newPost = {
                id: state.posts.length + 1,
                title: state.addPostTitleOnChange,
                photo: state.loadPhoto ? URL.createObjectURL(state.loadPhoto) : post,
                body: state.addPostDescriptionOnChange,
                date: date,
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                addPostTitleOnChange: '',
                loadPhoto: null,
                addPostDescriptionOnChange: '',
                searchPostsResult: null,
            }
        }
        case FINDPOST: {
            return {
                ...state,
                searchPostsResult: [
                    ...state
                        .posts
                        .filter((post) => post.title.toLowerCase().includes(state.searchPostText))],
            }
        }
        case DELETEPOST: {
            return {
                ...state,
                posts: [...state.posts.filter((item) =>  item.id !== action.id ) ],
                searchPostsResult: null,
            }
        }
        case SELECTPOST: {
            return {
                ...state,
                selectedPost: {...state.posts.find( (item) => item.id === action.id ) }
            }
        }
        case SINGLEPOST: {
            let splitTitle = state.selectedPost.title.toLowerCase().split(' ');
            return {
                ...state,
                singlePosts: [
                    ...state
                        .posts
                        .filter( (item) => {
                            for (let str of splitTitle) {
                                if (item.title.toLowerCase().includes(str)) {
                                    return item;
                                }
                            }
                            return false;
                        })]
            }
        }
        case EDITPOST: {
            let newPost = {
                id: state.selectedPost.id,
                title: state.addPostTitleOnChange
                    ? state.addPostTitleOnChange
                    : state.selectedPost.title,
                photo: state.loadPhoto ? URL.createObjectURL(state.loadPhoto) : state.selectedPost.photo,
                body: state.addPostDescriptionOnChange ? state.addPostDescriptionOnChange
                    : state.selectedPost.body,
                date: date + " edit",
            }
            return {
                ...state,
                posts: [...state.posts.map( (item) => {
                    if(item.id === newPost.id) {
                        return newPost;
                    }
                    return item;
                } ) ],
                addPostTitleOnChange: null,
                loadPhoto: null,
                addPostDescriptionOnChange: null,
                selectedPost: null,
                searchPostsResult: null,
            }

        }
        default:
            return state;
    }
}

export const setSearchPostTextAC = (text) => ({ type: SETPOSTTEXT, text });
export const setTitlePostTextAC = (text) => ({ type: SETTITLETEXT, text });
export const setDescriptionPostTextAC = (text) => ({ type: SETDESCRIPTIONTEXT, text });
export const findPostAC = () => ({ type: FINDPOST });
export const deletePostAC = (id) => ({ type: DELETEPOST, id });
export const addPhotoAC = (photo) => ({ type: LOADPHOTO, photo });
export const addPostAC = () => ({ type: ADDPOST });
export const selectPostAC = (id) => ({ type: SELECTPOST, id });
export const editPostAC = () => ({ type: EDITPOST });
export const singlePostsAC = () => ({ type: SINGLEPOST });
export default postsReducer;
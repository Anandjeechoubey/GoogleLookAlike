import React from 'react'
import '../App.css'
import logo from '../googlelogo_color_272x92dp.png'
import Avatar from '@material-ui/core/Avatar'
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import MicIcon from '@material-ui/icons/Mic'
import { FormControl, InputLabel, OutlinedInput, InputAdornment, Button} from '@material-ui/core'

const Home = () => {
    return (
        <div className='flex flex-col h-screen'>
            <div className='flex flex-row-reverse gap-1 mr-3 p-4'>
                <Avatar alt="Jake Peraulta" src="/static/images/avatar/jake.jpg" />
                <Button className='rounded-full'><AppsIcon/></Button>
                <Button><a href='https://www.google.co.in/imghp'>Images</a></Button>
                <Button><a href='https://gmail.com'>Gmail</a></Button>
            </div>
            <div className="App-header max-w-screen-lg mx-auto flex-grow text-center">
                <img src={logo} className="App-logo" alt="logo" />
                <div  className='my-5 w-full'>
                    <FormControl fullWidth variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
                            endAdornment={<InputAdornment position="end"><MicIcon/></InputAdornment>}
                            labelWidth={0}
                        />
                    </FormControl>
                </div>
                
                <div className='flex flex-row mb-5 gap-4'>
                    <Button variant="outlined" className='shadow-none'>Google Search</Button>
                    <Button variant="outlined">I'm feeling Lucky</Button>
                </div>
                <div className='text-black text-sm'>Google offered in: 
                <span className='text-indigo-800'>हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ</span></div>
            </div>
            <div className='bg-gray-100 text-sm'>
                <div className='p-4 text-gray-500'>India</div>
                <hr/>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row'>
                        <div className='p-4 text-gray-500'>About</div>
                        <div className='p-4 text-gray-500'>Business</div>
                        <div className='p-4 text-gray-500'>Advertising</div>
                        <div className='p-4 text-gray-500'>How Search Works</div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='p-4 text-gray-500'>Privacy</div>
                        <div className='p-4 text-gray-500'>Terms</div>
                        <div className='p-4 text-gray-500 float-right'>Settings</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
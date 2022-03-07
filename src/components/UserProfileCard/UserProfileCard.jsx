// import './styles.css';
import '../../Styles/UserProfileCard/UserProfileCard.css'


const UserProfileCard = () => {

    return(
        <div className='card-container'>
            <div className='left-container'>
                <div>Profile Pic</div>
                <h3>Name</h3>
                <p>Location</p>
                <button>Edit Profile</button>
            </div>
            <div className='right-container'>
                <div className='right-up'>
                    <div className='right-up-up'>
                        <div className='about-container'>
                            <p>About</p>
                            <p>Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas laudem iracundia et, ad per utamur ceteros apeirian</p>
                        </div>
                        <div className='liked-things-container'>
                            <p>Things I Like</p>
                            <div>Buttons container</div> 
                        </div>
                    </div>
                    <div className='right-up-down'>
                        <div className='email-container'>
                            <p>Email</p>
                            <p>testemail@test.com</p>
                        </div>
                        <div className='phone-container'>
                            <p>Phone</p>
                            <p>111-2234-5322</p>
                        </div>
                    </div>
                </div>
                <div className='right-down'>
                    <div className='user-stats'>
                        <h1>25</h1>
                        <p>Posts</p>
                    </div>
                    <div className='user-stats'>
                        <h1>54</h1>
                        <p>Likes</p>
                    </div>
                    <div className='user-stats'>
                        <h1>52</h1>
                        <p>Friends</p>
                    </div>
                    <div className='user-stats'>
                        <h1>54</h1>
                        <p>Followers</p>
                    </div>
                    <div className='user-stats'>
                        <h1>45</h1>
                        <p>Following</p>
                    </div>

                </div>
            </div>
        </div> 
    )
}

export default UserProfileCard;
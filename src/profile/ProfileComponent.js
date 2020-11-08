import React from 'react'
import PropTypes from 'prop-types'; 

const ProfileComponent = (
    { photo = <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Floading-icon_8152990.htm&psig=AOvVaw2qkWkaRRzsJhrQijdr3dzM&ust=1604924587648000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiAg9Pq8uwCFQAAAAAdAAAAABAI" alt="figurant iufy" />,
        info: { fullName = "User",
                bio = "Nothing to say",
                profession = "I don't work" 
               },
        alerte
    }) => {


    return (

        <div>
            {alerte()}
            <h1>{fullName}</h1>
            <h1>{profession}</h1>
            <p>{bio}</p>
            <div>{photo}</div>
        </div>
    )
}
ProfileComponent.propTypes = {
    info: PropTypes.object.isRequired,
    }

export default ProfileComponent

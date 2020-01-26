import React from 'react';

const data = {
    velopert : {
        name : '백종현',
        des : '백엔드 개발자'
    },
    mogackco : {
        name : '정현수',
        des : '리액트 개발자'
    }
};

const Profile = ({match}) => {
    console.log(match);
    
    const {username} = match.params;
    const profile = data[username];
    if(!profile){
        return <div>존재하지 않는사람입니다.</div> 
    }
    return(
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>
                {profile.des}
            </p>
        </div>
    )
}

export default Profile;
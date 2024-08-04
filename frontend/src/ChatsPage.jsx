import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props)=> {
    return (
        <div style={{ height:'100vh'}}>
            <PrettyChatWindow
                projectId='7c41a2a3-8660-4834-b474-456e4b951efb'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage
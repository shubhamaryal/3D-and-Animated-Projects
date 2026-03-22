function Video() {
    return (
        <div className="h-full w-full">
            <video
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1774163937~exp=1774167537~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=fb30dc8223a004661aa2990e4b2843cafbaa2b9972e278f607858e58980c183f&r=dXMtZWFzdDE%3D"
            ></video>
        </div>
    );
}

export default Video;

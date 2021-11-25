function Song(props) {
    return (
        <p>{props.songName}: {props.year} :{props.artist}</p>
    )
}
export default Song;
export function NavigationMenuVideo({displayedLink}: {displayedLink: string}) {

	return (
		<video
			src={`${displayedLink}.mp4`}
			autoPlay
			muted
			loop
			className="object-cover"
			width="100%"
			height="100%"
		></video>
	);
}
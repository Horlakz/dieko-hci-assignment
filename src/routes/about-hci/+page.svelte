<script>
	import historyOfHCI from '$lib/assets/history-of-hci.png';
</script>

<section class="flex-col-center gap-6 sm:px-20 px-8">
	<h2 class="sm:text-3xl text-xl text-center font-bold">
		About Human Computer Interaction &#40;HCI&#41;
	</h2>

	<section class="w-full flex flex-col justify-start items-start">
		<h3 class="border-b-2 border-black w-fit text-lg font-bold pr-28">Meaning of HCI?</h3>
		<p>
			Human-computer interaction (HCI) is a field that studies the interaction between humans and
			computers.
			<br />
			It focuses on designing and evaluating computer technology to ensure it's effective, efficient,
			and user-friendly.
			<br />
			HCI draws on various disciplines like computer science, psychology, design, and ergonomics.
		</p>
	</section>

	<section class="w-full flex flex-col justify-start items-start">
		<h3 class="border-b-2 border-black w-fit text-lg font-bold pr-28">History is HCI?</h3>

		<p>
			Human-Computer Interaction (HCI) has emerged as a critical discipline at the intersection of
			computer science, cognitive science, psychology, and design. Understanding the history of HCI
			and the evolution of interaction paradigms is fundamental to creating user-centered
			technology.
		</p>

		<h6>The Genesis of HCI (1960s-1980s):</h6>
		<p>
			The early years of HCI coincided with the advent of large, complex computer systems. These
			mainframes presented a significant challenge – their cryptic command line interfaces (CLIs)
			demanded specialized knowledge and were far from user-friendly. Pioneering HCI researchers,
			drawing upon human factors engineering principles, aimed to bridge this gap by optimizing the
			"human-machine fit." Their focus was on ensuring computer systems aligned with human cognitive
			capabilities and limitations.
		</p>
		<h6>Dominant Paradigms of the Early Era:</h6>
		<p>
			Command Line Interfaces (CLIs): CLIs were the primary mode of interaction, requiring users to
			type specific commands to interact with the computer. While powerful, they were prone to
			errors and lacked discoverability for new users. Batch Processing: Tasks were submitted on
			punch cards or magnetic tapes, with the computer processing them in batches. This lacked
			real-time interaction and necessitated significant planning beforehand.
		</p>

		<h6>The Cognitive Revolution and the Rise of User Interfaces (1980s-1990s):</h6>
		<p>
			The 1980s witnessed a paradigm shift with the rise of cognitive science. HCI research began to
			delve deeper into how users process information, learn, and remember. User interfaces (UIs)
			became the focal point, with the primary goal being to develop interfaces that were more
			intuitive and learnable.
		</p>

		<h6>Paradigms Ushered in by the Cognitive Era:</h6>
		<p>
			Graphical User Interfaces (GUIs): The introduction of GUIs, with their now-ubiquitous windows,
			icons, menus, and pointers (WIMP), revolutionized human-computer interaction. GUIs provided a
			visual metaphor for users to navigate the computer system, significantly improving
			accessibility and user-friendliness. Direct Manipulation: This paradigm emphasized on-screen
			objects that mimicked real-world manipulation. Users could directly interact with these
			objects, fostering a more natural and intuitive experience.
		</p>
		<h6>The Expansion of HCI and the Rise of User Experience (UX) (1990s-Present):</h6>
		<p>
			As technology progressed at an exponential rate, HCI research diversified to encompass a wider
			range of devices and interaction methods. The internet explosion, the rise of mobile
			computing, and the introduction of speech recognition and touchscreens all presented new
			challenges and opportunities for HCI research. The focus shifted towards usability,
			accessibility, and user experience (UX) across these diverse platforms.
		</p>
		<h6>Paradigms of the Modern Era:</h6>
		<p>
			Modeless Interaction: Modern interfaces adapt to user context and task. Menus and controls
			change dynamically based on the user's actions, reducing cognitive load and streamlining
			workflow. Multimodal Interaction: Users can interact with computers through a variety of
			modalities, such as voice, touch, gesture, and even brain-computer interfaces. This allows for
			a more natural and personalized interaction experience. Affective Computing: HCI now considers
			the emotional aspect of interaction. Interfaces can respond to and adapt to the user's
			emotional state, with the goal of creating a more empathetic and engaging experience.
		</p>
		<h6>The Future of HCI: A Glimpse Ahead</h6>
		<p>
			HCI is a dynamic field in constant flux, continuously adapting to the ever-changing
			technological landscape. Emerging areas like artificial intelligence, virtual reality, and
			augmented reality will undoubtedly present new challenges and opportunities for HCI research.
			The focus will likely remain on creating seamless, natural, and personalized interactions that
			empower users and enhance their experience with technology. This historical examination
			provides a foundation for understanding the evolution of HCI and the key paradigms that have
			shaped this critical field.
		</p>

		<h6>Pictorial representation of the Paradigms of interactions in HCI</h6>
		<img src={historyOfHCI} alt="history of hci pictorial representation" class="py-6" />
	</section>
</section>

<style>
	section {
		max-width: 800px;
	}

	section > h3 {
		margin-top: 1.5rem;
	}

	section > p {
		margin-top: 0.5rem;
	}

	section > h6 {
		margin-top: 1rem;
		font-weight: 600;
	}

	section > h6 + p {
		margin-top: 0.5rem;
	}
</style>

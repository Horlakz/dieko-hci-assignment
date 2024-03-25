import EducationIcon from '$lib/icons/EducationIcon.svelte';
import EnvelopeIcon from '$lib/icons/EnvelopeIcon.svelte';
import HomeIcon from '$lib/icons/HomeIcon.svelte';
import NotesIcon from '$lib/icons/NotesIcon.svelte';
import StackIcon from '$lib/icons/StackIcon.svelte';
import UserIcon from '$lib/icons/UserIcon.svelte';

export const navmenu = [
	{
		icon: HomeIcon,
		href: '/',
		alt: 'Home'
	},
	{
		icon: UserIcon,
		href: '/about',
		alt: 'About'
	},
	{
		icon: StackIcon,
		href: '/examples',
		alt: 'Examples'
	},
	{
		icon: EducationIcon,
		href: '/about-hci',
		alt: 'About HCI'
	},
	{
		icon: NotesIcon,
		href: '/applications',
		alt: 'Applications of HCI'
	},
	{
		icon: EnvelopeIcon,
		href: '/contact',
		alt: 'Contact'
	}
];

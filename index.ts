import { __unstable__loadDesignSystem } from 'tailwindcss';

const design = await __unstable__loadDesignSystem(
	`@theme { --breakpoint-lg: 64rem; --container-lg: 32rem; --spacing: 0.25rem; }`
);

// 1. Only `min` is canonicalized
console.log(design.canonicalizeCandidates([`min-[64rem]:flex`])); // [ 'lg:flex' ]
console.log(design.canonicalizeCandidates([`max-[64rem]:flex`])); // [ 'max-[64rem]:flex' ]

// 2. Container queries not canonicalized
console.log(design.canonicalizeCandidates([`@min-[32rem]:flex`])); // [ '@min-[32rem]:flex' ]
console.log(design.canonicalizeCandidates([`@max-[32rem]:flex`])); // [ '@max-[32rem]:flex' ]

// 3. px not canonicalized to rem
console.log(design.canonicalizeCandidates([`p-[8px]`], { rem: 16 })); // [ 'p-2' ]
console.log(design.canonicalizeCandidates([`min-[1024px]:flex`], { rem: 16 })); // [ 'min-[1024px]:flex' ]

import { Session } from 'next-auth';
import { ReactNode } from 'react';

export interface Buttons {
	data: Session | null,
};

export interface Nav {
	children: ReactNode,
	settings: boolean,
}

export type State = {
	general: {
		isMobile: boolean | null,
		authToken: string | null,
	}
}
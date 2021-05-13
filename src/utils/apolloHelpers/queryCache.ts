import { TypePolicy } from "@apollo/client";
import { TeachersQuery } from "../../generated/graphql";

const teacherQueryCache = {
		teachers: {
			keyArgs: [],
			merge: (existing: TeachersQuery, incoming: TeachersQuery): TeachersQuery => {
				return { ...incoming, teachers: [...existing?.teachers ?? [], ...incoming.teachers]}
			}
		}
}

export const fields = { ...teacherQueryCache };
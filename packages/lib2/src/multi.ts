import * as _ from 'lodash'

export function multi(a: number, b: number): number {
	return _.sum([a* b])
}

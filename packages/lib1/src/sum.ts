import * as _ from 'lodash'
import {multi} from '@test/lib2';

export function sum(a: number, b: number): number {
	return _.sum([a, b])
}

export function otherSum(a: number, b: number): number {
	return _.sum([a, b])
}

export function sumAndMulti(a: number, b: number): number {
	return multi(_.sum([a, b]), _.sum([a, b]))
}

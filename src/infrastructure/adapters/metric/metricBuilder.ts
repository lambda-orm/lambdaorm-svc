import { Metric } from '../../../application'
import { PromClientMetric } from './promClientMetric'

export class MetricBuilder {
	public build (): Metric {
		return new PromClientMetric()
	}
}

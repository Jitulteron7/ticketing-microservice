import {Publisher,OrderCancelledEvent,Subject} from '@teronpackages/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
    subject:Subject.orderCancelled=Subject.orderCancelled
}
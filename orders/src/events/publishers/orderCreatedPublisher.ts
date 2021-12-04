import {Publisher,OrderCreatedEvent,Subject} from '@teronpackages/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
    subject:Subject.orderCreated=Subject.orderCreated
}
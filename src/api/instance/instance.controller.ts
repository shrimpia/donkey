import { Controller, Get } from '@nestjs/common';
import { InstanceService } from './instance.service';

@Controller('/api')
export class InstanceController {
  constructor(private instanceService: InstanceService) {}

  @Get('/v2/instance')
  async v2() {
    return this.instanceService.fetchInstanceV2();
  }

  @Get('/v1/instance')
  async v1() {
    return this.instanceService.fetchInstanceV1();
  }
}

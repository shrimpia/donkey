import { Module } from '@nestjs/common';
import { InstanceController } from './instance/instance.controller';
import { misskeyApiProvider } from 'src/providers/misskey-api';
import { InstanceService } from './instance/instance.service';

@Module({
  providers: [misskeyApiProvider, InstanceService],
  controllers: [InstanceController],
})
export class MastodonApiModule {}

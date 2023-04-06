import { Module } from '@nestjs/common';
import { MastodonApiModule } from './api/mastodon-api.module';

@Module({
  providers: [],
  imports: [MastodonApiModule],
})
export class AppModule {}

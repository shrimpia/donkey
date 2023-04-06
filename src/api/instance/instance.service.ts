import { Inject, Injectable } from '@nestjs/common';
import { APIClient } from 'misskey-js/built/api';
import {
  DI,
  EMPTY_ARRAY_NOT_IN_MISSKEY,
  EMPTY_STRING_NOT_IN_MISSKEY,
  FALSE_NOT_IN_MISSKEY,
  IMPLEMENTED_MASTODON_API_VERSION,
  MISSKEY_MAX_ATTACHMENTS,
  NULL_NOT_IN_MISSKEY,
  ZERO_NOT_IN_MISSKEY,
} from 'src/const';

@Injectable()
export class InstanceService {
  @Inject(DI.MISSKEY)
  private api: APIClient;

  async fetchInstanceV1(): Promise<any> {
    const meta = await this.api.request('meta', { detail: true });
    const stats = await this.api.request('stats');
    const domain = new URL(meta.uri).host;
    const donkeyUrl = new URL(process.env.HOST ?? '');

    return {
      uri: domain,
      title: meta.name ?? domain,
      short_description: meta.description ?? '',
      description: meta.description ?? '',
      email: meta.maintainerEmail,
      version: IMPLEMENTED_MASTODON_API_VERSION,
      urls: {
        streaming_api: `${donkeyUrl.protocol.replace('http', 'ws')}//${
          donkeyUrl.host
        }`,
      },
      stats: {
        user_count: stats.originalUsersCount,
        status_count: stats.originalNotesCount,
        domain_count: stats.instances,
      },
      thumbnail: meta.backgroundImageUrl,
      languages: meta.langs,
      registrations: !meta.disableRegistration,
      approval_required: FALSE_NOT_IN_MISSKEY,
      invites_enabled: FALSE_NOT_IN_MISSKEY,
      configuration: {
        accounts: {
          max_featured_tags: ZERO_NOT_IN_MISSKEY,
        },
        statuses: {
          max_characters: meta.maxNoteTextLength,
          max_media_attachments: MISSKEY_MAX_ATTACHMENTS,
          characters_reserved_per_url: 23,
        },
        media_attachments: {
          supported_mime_types: [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/heic',
            'image/heif',
            'image/webp',
            'image/avif',
            'video/webm',
            'video/mp4',
            'video/quicktime',
            'video/ogg',
            'audio/wave',
            'audio/wav',
            'audio/x-wav',
            'audio/x-pn-wave',
            'audio/vnd.wave',
            'audio/ogg',
            'audio/vorbis',
            'audio/mpeg',
            'audio/mp3',
            'audio/webm',
            'audio/flac',
            'audio/aac',
            'audio/m4a',
            'audio/x-m4a',
            'audio/mp4',
            'audio/3gpp',
            'video/x-ms-asf',
          ],
          image_size_limit: 10485760,
          image_matrix_limit: 16777216,
          video_size_limit: 41943040,
          video_frame_rate_limit: 60,
          video_matrix_limit: 2304000,
        },
        polls: {
          max_options: 10,
          max_characters_per_option: 50,
          min_expiration: 0,
          max_expiration: 2629746,
        },
        // Note: email, accountどちらもnot nullと定められている
        // とはいえ、クライアントから使われることはなさそうなのでとりあえず雑実装
        contact: {
          email: meta.maintainerEmail,
          account: null,
        },
        rules: EMPTY_ARRAY_NOT_IN_MISSKEY,
      },
    };
  }

  async fetchInstanceV2(): Promise<any> {
    const meta = await this.api.request('meta', { detail: true });
    const domain = new URL(meta.uri).host;
    const donkeyUrl = new URL(process.env.HOST ?? '');

    return {
      domain,
      title: meta.name ?? domain,
      version: IMPLEMENTED_MASTODON_API_VERSION,
      sourceUrl: meta.repositoryUrl,
      description: meta.description ?? '',
      usage: {
        users: {
          active_month: ZERO_NOT_IN_MISSKEY,
        },
      },
      thumbnail: {
        url: meta.backgroundImageUrl,
      },
      languages: meta.langs,
      configuration: {
        urls: {
          streaming: `${donkeyUrl.protocol.replace('http', 'ws')}//${
            donkeyUrl.host
          }`,
          status: NULL_NOT_IN_MISSKEY,
        },
        accounts: {
          max_featured_tags: ZERO_NOT_IN_MISSKEY,
        },
        statuses: {
          max_characters: meta.maxNoteTextLength,
          max_media_attachments: MISSKEY_MAX_ATTACHMENTS,
          characters_reserved_per_url: 23,
        },
        media_attachments: {
          supported_mime_types: [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/heic',
            'image/heif',
            'image/webp',
            'image/avif',
            'video/webm',
            'video/mp4',
            'video/quicktime',
            'video/ogg',
            'audio/wave',
            'audio/wav',
            'audio/x-wav',
            'audio/x-pn-wave',
            'audio/vnd.wave',
            'audio/ogg',
            'audio/vorbis',
            'audio/mpeg',
            'audio/mp3',
            'audio/webm',
            'audio/flac',
            'audio/aac',
            'audio/m4a',
            'audio/x-m4a',
            'audio/mp4',
            'audio/3gpp',
            'video/x-ms-asf',
          ],
          image_size_limit: 10485760,
          image_matrix_limit: 16777216,
          video_size_limit: 41943040,
          video_frame_rate_limit: 60,
          video_matrix_limit: 2304000,
        },
        polls: {
          max_options: 10,
          max_characters_per_option: 50,
          min_expiration: 0,
          max_expiration: 2629746,
        },
        translation: {
          enabled: meta.translatorAvailable,
        },
        registrations: {
          enabled: !meta.disableRegistration,
          approval_required: FALSE_NOT_IN_MISSKEY,
          message: EMPTY_STRING_NOT_IN_MISSKEY,
        },
        // Note: email, accountどちらもnot nullと定められている
        // とはいえ、クライアントから使われることはなさそうなのでとりあえず雑実装
        contact: {
          email: meta.maintainerEmail,
          account: null,
        },
        rules: EMPTY_ARRAY_NOT_IN_MISSKEY,
      },
    };
  }
}

<?php
/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Registers all of the pbj schemas with the MessageResolver.
 *
 * @link https://schemas.tmz.com/
 */

\Gdbots\Pbj\MessageResolver::registerMap([
    'gdbots:ncr:event:edge-created' => 'Gdbots\Schemas\Ncr\Event\EdgeCreatedV1',
    'gdbots:ncr:event:edge-deleted' => 'Gdbots\Schemas\Ncr\Event\EdgeDeletedV1',
    'gdbots:pbjx:event:event-execution-failed' => 'Gdbots\Schemas\Pbjx\Event\EventExecutionFailedV1',
    'gdbots:pbjx:event:health-checked' => 'Gdbots\Schemas\Pbjx\Event\HealthCheckedV1',
    'tmz:apollo:event:poll-created' => 'Tmz\Schemas\Apollo\Event\PollCreatedV1',
    'tmz:apollo:event:poll-deleted' => 'Tmz\Schemas\Apollo\Event\PollDeletedV1',
    'tmz:apollo:event:poll-expired' => 'Tmz\Schemas\Apollo\Event\PollExpiredV1',
    'tmz:apollo:event:poll-marked-as-draft' => 'Tmz\Schemas\Apollo\Event\PollMarkedAsDraftV1',
    'tmz:apollo:event:poll-marked-as-pending' => 'Tmz\Schemas\Apollo\Event\PollMarkedAsPendingV1',
    'tmz:apollo:event:poll-published' => 'Tmz\Schemas\Apollo\Event\PollPublishedV1',
    'tmz:apollo:event:poll-scheduled' => 'Tmz\Schemas\Apollo\Event\PollScheduledV1',
    'tmz:apollo:event:poll-unpublished' => 'Tmz\Schemas\Apollo\Event\PollUnpublishedV1',
    'tmz:apollo:event:poll-updated' => 'Tmz\Schemas\Apollo\Event\PollUpdatedV1',
    'tmz:apollo:event:vote-casted' => 'Tmz\Schemas\Apollo\Event\VoteCastedV1',
    'tmz:boost:event:sponsor-created' => 'Tmz\Schemas\Boost\Event\SponsorCreatedV1',
    'tmz:boost:event:sponsor-deleted' => 'Tmz\Schemas\Boost\Event\SponsorDeletedV1',
    'tmz:boost:event:sponsor-expired' => 'Tmz\Schemas\Boost\Event\SponsorExpiredV1',
    'tmz:boost:event:sponsor-marked-as-draft' => 'Tmz\Schemas\Boost\Event\SponsorMarkedAsDraftV1',
    'tmz:boost:event:sponsor-marked-as-pending' => 'Tmz\Schemas\Boost\Event\SponsorMarkedAsPendingV1',
    'tmz:boost:event:sponsor-published' => 'Tmz\Schemas\Boost\Event\SponsorPublishedV1',
    'tmz:boost:event:sponsor-renamed' => 'Tmz\Schemas\Boost\Event\SponsorRenamedV1',
    'tmz:boost:event:sponsor-scheduled' => 'Tmz\Schemas\Boost\Event\SponsorScheduledV1',
    'tmz:boost:event:sponsor-unpublished' => 'Tmz\Schemas\Boost\Event\SponsorUnpublishedV1',
    'tmz:boost:event:sponsor-updated' => 'Tmz\Schemas\Boost\Event\SponsorUpdatedV1',
    'tmz:canvas:event:page-created' => 'Tmz\Schemas\Canvas\Event\PageCreatedV1',
    'tmz:canvas:event:page-deleted' => 'Tmz\Schemas\Canvas\Event\PageDeletedV1',
    'tmz:canvas:event:page-expired' => 'Tmz\Schemas\Canvas\Event\PageExpiredV1',
    'tmz:canvas:event:page-marked-as-draft' => 'Tmz\Schemas\Canvas\Event\PageMarkedAsDraftV1',
    'tmz:canvas:event:page-marked-as-pending' => 'Tmz\Schemas\Canvas\Event\PageMarkedAsPendingV1',
    'tmz:canvas:event:page-published' => 'Tmz\Schemas\Canvas\Event\PagePublishedV1',
    'tmz:canvas:event:page-renamed' => 'Tmz\Schemas\Canvas\Event\PageRenamedV1',
    'tmz:canvas:event:page-scheduled' => 'Tmz\Schemas\Canvas\Event\PageScheduledV1',
    'tmz:canvas:event:page-unpublished' => 'Tmz\Schemas\Canvas\Event\PageUnpublishedV1',
    'tmz:canvas:event:page-updated' => 'Tmz\Schemas\Canvas\Event\PageUpdatedV1',
    'tmz:curator:event:gallery-created' => 'Tmz\Schemas\Curator\Event\GalleryCreatedV1',
    'tmz:curator:event:gallery-deleted' => 'Tmz\Schemas\Curator\Event\GalleryDeletedV1',
    'tmz:curator:event:gallery-expired' => 'Tmz\Schemas\Curator\Event\GalleryExpiredV1',
    'tmz:curator:event:gallery-marked-as-draft' => 'Tmz\Schemas\Curator\Event\GalleryMarkedAsDraftV1',
    'tmz:curator:event:gallery-marked-as-pending' => 'Tmz\Schemas\Curator\Event\GalleryMarkedAsPendingV1',
    'tmz:curator:event:gallery-published' => 'Tmz\Schemas\Curator\Event\GalleryPublishedV1',
    'tmz:curator:event:gallery-renamed' => 'Tmz\Schemas\Curator\Event\GalleryRenamedV1',
    'tmz:curator:event:gallery-scheduled' => 'Tmz\Schemas\Curator\Event\GalleryScheduledV1',
    'tmz:curator:event:gallery-unpublished' => 'Tmz\Schemas\Curator\Event\GalleryUnpublishedV1',
    'tmz:curator:event:gallery-updated' => 'Tmz\Schemas\Curator\Event\GalleryUpdatedV1',
    'tmz:curator:event:promotion-created' => 'Tmz\Schemas\Curator\Event\PromotionCreatedV1',
    'tmz:curator:event:promotion-deleted' => 'Tmz\Schemas\Curator\Event\PromotionDeletedV1',
    'tmz:curator:event:promotion-expired' => 'Tmz\Schemas\Curator\Event\PromotionExpiredV1',
    'tmz:curator:event:promotion-marked-as-draft' => 'Tmz\Schemas\Curator\Event\PromotionMarkedAsDraftV1',
    'tmz:curator:event:promotion-marked-as-pending' => 'Tmz\Schemas\Curator\Event\PromotionMarkedAsPendingV1',
    'tmz:curator:event:promotion-published' => 'Tmz\Schemas\Curator\Event\PromotionPublishedV1',
    'tmz:curator:event:promotion-scheduled' => 'Tmz\Schemas\Curator\Event\PromotionScheduledV1',
    'tmz:curator:event:promotion-unpublished' => 'Tmz\Schemas\Curator\Event\PromotionUnpublishedV1',
    'tmz:curator:event:promotion-updated' => 'Tmz\Schemas\Curator\Event\PromotionUpdatedV1',
    'tmz:curator:event:teaser-created' => 'Tmz\Schemas\Curator\Event\TeaserCreatedV1',
    'tmz:curator:event:teaser-deleted' => 'Tmz\Schemas\Curator\Event\TeaserDeletedV1',
    'tmz:curator:event:teaser-expired' => 'Tmz\Schemas\Curator\Event\TeaserExpiredV1',
    'tmz:curator:event:teaser-marked-as-draft' => 'Tmz\Schemas\Curator\Event\TeaserMarkedAsDraftV1',
    'tmz:curator:event:teaser-marked-as-pending' => 'Tmz\Schemas\Curator\Event\TeaserMarkedAsPendingV1',
    'tmz:curator:event:teaser-published' => 'Tmz\Schemas\Curator\Event\TeaserPublishedV1',
    'tmz:curator:event:teaser-scheduled' => 'Tmz\Schemas\Curator\Event\TeaserScheduledV1',
    'tmz:curator:event:teaser-unpublished' => 'Tmz\Schemas\Curator\Event\TeaserUnpublishedV1',
    'tmz:curator:event:teaser-updated' => 'Tmz\Schemas\Curator\Event\TeaserUpdatedV1',
    'tmz:curator:event:timeline-created' => 'Tmz\Schemas\Curator\Event\TimelineCreatedV1',
    'tmz:curator:event:timeline-deleted' => 'Tmz\Schemas\Curator\Event\TimelineDeletedV1',
    'tmz:curator:event:timeline-expired' => 'Tmz\Schemas\Curator\Event\TimelineExpiredV1',
    'tmz:curator:event:timeline-marked-as-draft' => 'Tmz\Schemas\Curator\Event\TimelineMarkedAsDraftV1',
    'tmz:curator:event:timeline-marked-as-pending' => 'Tmz\Schemas\Curator\Event\TimelineMarkedAsPendingV1',
    'tmz:curator:event:timeline-published' => 'Tmz\Schemas\Curator\Event\TimelinePublishedV1',
    'tmz:curator:event:timeline-renamed' => 'Tmz\Schemas\Curator\Event\TimelineRenamedV1',
    'tmz:curator:event:timeline-scheduled' => 'Tmz\Schemas\Curator\Event\TimelineScheduledV1',
    'tmz:curator:event:timeline-unpublished' => 'Tmz\Schemas\Curator\Event\TimelineUnpublishedV1',
    'tmz:curator:event:timeline-updated' => 'Tmz\Schemas\Curator\Event\TimelineUpdatedV1',
    'tmz:curator:event:widget-created' => 'Tmz\Schemas\Curator\Event\WidgetCreatedV1',
    'tmz:curator:event:widget-deleted' => 'Tmz\Schemas\Curator\Event\WidgetDeletedV1',
    'tmz:curator:event:widget-updated' => 'Tmz\Schemas\Curator\Event\WidgetUpdatedV1',
    'tmz:dam:event:asset-created' => 'Tmz\Schemas\Dam\Event\AssetCreatedV1',
    'tmz:dam:event:asset-deleted' => 'Tmz\Schemas\Dam\Event\AssetDeletedV1',
    'tmz:dam:event:asset-expired' => 'Tmz\Schemas\Dam\Event\AssetExpiredV1',
    'tmz:dam:event:asset-linked' => 'Tmz\Schemas\Dam\Event\AssetLinkedV1',
    'tmz:dam:event:asset-patched' => 'Tmz\Schemas\Dam\Event\AssetPatchedV1',
    'tmz:dam:event:asset-unlinked' => 'Tmz\Schemas\Dam\Event\AssetUnlinkedV1',
    'tmz:dam:event:asset-updated' => 'Tmz\Schemas\Dam\Event\AssetUpdatedV1',
    'tmz:dam:event:gallery-asset-reordered' => 'Tmz\Schemas\Dam\Event\GalleryAssetReorderedV1',
    'tmz:iam:event:app-created' => 'Tmz\Schemas\Iam\Event\AppCreatedV1',
    'tmz:iam:event:app-deleted' => 'Tmz\Schemas\Iam\Event\AppDeletedV1',
    'tmz:iam:event:app-roles-granted' => 'Tmz\Schemas\Iam\Event\AppRolesGrantedV1',
    'tmz:iam:event:app-roles-revoked' => 'Tmz\Schemas\Iam\Event\AppRolesRevokedV1',
    'tmz:iam:event:app-updated' => 'Tmz\Schemas\Iam\Event\AppUpdatedV1',
    'tmz:iam:event:role-created' => 'Tmz\Schemas\Iam\Event\RoleCreatedV1',
    'tmz:iam:event:role-deleted' => 'Tmz\Schemas\Iam\Event\RoleDeletedV1',
    'tmz:iam:event:role-updated' => 'Tmz\Schemas\Iam\Event\RoleUpdatedV1',
    'tmz:iam:event:user-created' => 'Tmz\Schemas\Iam\Event\UserCreatedV1',
    'tmz:iam:event:user-deleted' => 'Tmz\Schemas\Iam\Event\UserDeletedV1',
    'tmz:iam:event:user-roles-granted' => 'Tmz\Schemas\Iam\Event\UserRolesGrantedV1',
    'tmz:iam:event:user-roles-revoked' => 'Tmz\Schemas\Iam\Event\UserRolesRevokedV1',
    'tmz:iam:event:user-updated' => 'Tmz\Schemas\Iam\Event\UserUpdatedV1',
    'tmz:news:event:apple-news-article-synced' => 'Tmz\Schemas\News\Event\AppleNewsArticleSyncedV1',
    'tmz:news:event:article-created' => 'Tmz\Schemas\News\Event\ArticleCreatedV1',
    'tmz:news:event:article-deleted' => 'Tmz\Schemas\News\Event\ArticleDeletedV1',
    'tmz:news:event:article-expired' => 'Tmz\Schemas\News\Event\ArticleExpiredV1',
    'tmz:news:event:article-locked' => 'Tmz\Schemas\News\Event\ArticleLockedV1',
    'tmz:news:event:article-marked-as-draft' => 'Tmz\Schemas\News\Event\ArticleMarkedAsDraftV1',
    'tmz:news:event:article-marked-as-pending' => 'Tmz\Schemas\News\Event\ArticleMarkedAsPendingV1',
    'tmz:news:event:article-published' => 'Tmz\Schemas\News\Event\ArticlePublishedV1',
    'tmz:news:event:article-renamed' => 'Tmz\Schemas\News\Event\ArticleRenamedV1',
    'tmz:news:event:article-scheduled' => 'Tmz\Schemas\News\Event\ArticleScheduledV1',
    'tmz:news:event:article-slotting-removed' => 'Tmz\Schemas\News\Event\ArticleSlottingRemovedV1',
    'tmz:news:event:article-unlocked' => 'Tmz\Schemas\News\Event\ArticleUnlockedV1',
    'tmz:news:event:article-unpublished' => 'Tmz\Schemas\News\Event\ArticleUnpublishedV1',
    'tmz:news:event:article-updated' => 'Tmz\Schemas\News\Event\ArticleUpdatedV1',
    'tmz:notify:event:notification-created' => 'Tmz\Schemas\Notify\Event\NotificationCreatedV1',
    'tmz:notify:event:notification-deleted' => 'Tmz\Schemas\Notify\Event\NotificationDeletedV1',
    'tmz:notify:event:notification-failed' => 'Tmz\Schemas\Notify\Event\NotificationFailedV1',
    'tmz:notify:event:notification-sent' => 'Tmz\Schemas\Notify\Event\NotificationSentV1',
    'tmz:notify:event:notification-updated' => 'Tmz\Schemas\Notify\Event\NotificationUpdatedV1',
    'tmz:ovp:event:video-created' => 'Tmz\Schemas\Ovp\Event\VideoCreatedV1',
    'tmz:ovp:event:video-deleted' => 'Tmz\Schemas\Ovp\Event\VideoDeletedV1',
    'tmz:ovp:event:video-expired' => 'Tmz\Schemas\Ovp\Event\VideoExpiredV1',
    'tmz:ovp:event:video-marked-as-draft' => 'Tmz\Schemas\Ovp\Event\VideoMarkedAsDraftV1',
    'tmz:ovp:event:video-marked-as-pending' => 'Tmz\Schemas\Ovp\Event\VideoMarkedAsPendingV1',
    'tmz:ovp:event:video-published' => 'Tmz\Schemas\Ovp\Event\VideoPublishedV1',
    'tmz:ovp:event:video-renamed' => 'Tmz\Schemas\Ovp\Event\VideoRenamedV1',
    'tmz:ovp:event:video-scheduled' => 'Tmz\Schemas\Ovp\Event\VideoScheduledV1',
    'tmz:ovp:event:video-unpublished' => 'Tmz\Schemas\Ovp\Event\VideoUnpublishedV1',
    'tmz:ovp:event:video-updated' => 'Tmz\Schemas\Ovp\Event\VideoUpdatedV1',
    'tmz:people:event:person-created' => 'Tmz\Schemas\People\Event\PersonCreatedV1',
    'tmz:people:event:person-deleted' => 'Tmz\Schemas\People\Event\PersonDeletedV1',
    'tmz:people:event:person-renamed' => 'Tmz\Schemas\People\Event\PersonRenamedV1',
    'tmz:people:event:person-updated' => 'Tmz\Schemas\People\Event\PersonUpdatedV1',
    'tmz:sys:event:flagset-created' => 'Tmz\Schemas\Sys\Event\FlagsetCreatedV1',
    'tmz:sys:event:flagset-deleted' => 'Tmz\Schemas\Sys\Event\FlagsetDeletedV1',
    'tmz:sys:event:flagset-updated' => 'Tmz\Schemas\Sys\Event\FlagsetUpdatedV1',
    'tmz:sys:event:picklist-created' => 'Tmz\Schemas\Sys\Event\PicklistCreatedV1',
    'tmz:sys:event:picklist-deleted' => 'Tmz\Schemas\Sys\Event\PicklistDeletedV1',
    'tmz:sys:event:picklist-updated' => 'Tmz\Schemas\Sys\Event\PicklistUpdatedV1',
    'tmz:sys:event:redirect-created' => 'Tmz\Schemas\Sys\Event\RedirectCreatedV1',
    'tmz:sys:event:redirect-deleted' => 'Tmz\Schemas\Sys\Event\RedirectDeletedV1',
    'tmz:sys:event:redirect-updated' => 'Tmz\Schemas\Sys\Event\RedirectUpdatedV1',
    'tmz:taxonomy:event:category-created' => 'Tmz\Schemas\Taxonomy\Event\CategoryCreatedV1',
    'tmz:taxonomy:event:category-deleted' => 'Tmz\Schemas\Taxonomy\Event\CategoryDeletedV1',
    'tmz:taxonomy:event:category-renamed' => 'Tmz\Schemas\Taxonomy\Event\CategoryRenamedV1',
    'tmz:taxonomy:event:category-updated' => 'Tmz\Schemas\Taxonomy\Event\CategoryUpdatedV1',
    'tmz:taxonomy:event:channel-created' => 'Tmz\Schemas\Taxonomy\Event\ChannelCreatedV1',
    'tmz:taxonomy:event:channel-deleted' => 'Tmz\Schemas\Taxonomy\Event\ChannelDeletedV1',
    'tmz:taxonomy:event:channel-renamed' => 'Tmz\Schemas\Taxonomy\Event\ChannelRenamedV1',
    'tmz:taxonomy:event:channel-updated' => 'Tmz\Schemas\Taxonomy\Event\ChannelUpdatedV1',
]);
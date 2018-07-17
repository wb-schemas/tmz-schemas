<?php
/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Registers all of the pbj schemas with the MessageResolver.
 *
 * @link http://schemas.tmz.com/
 */

\Gdbots\Pbj\MessageResolver::registerMap([
    'triniti:ovp.kaltura::caption' => 'Triniti\Schemas\OvpKaltura\CaptionV1',
    'triniti:ovp.kaltura::entry' => 'Triniti\Schemas\OvpKaltura\EntryV1',
    'triniti:ovp.kaltura::flavor' => 'Triniti\Schemas\OvpKaltura\FlavorV1',
    'triniti:ovp.kaltura:command:sync-entry' => 'Triniti\Schemas\OvpKaltura\Command\SyncEntryV1',
]);
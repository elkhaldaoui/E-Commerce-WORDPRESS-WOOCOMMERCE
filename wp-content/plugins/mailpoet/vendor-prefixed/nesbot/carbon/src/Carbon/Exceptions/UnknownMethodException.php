<?php
namespace MailPoetVendor\Carbon\Exceptions;
if (!defined('ABSPATH')) exit;
use BadMethodCallException as BaseBadMethodCallException;
use Exception;
class UnknownMethodException extends BaseBadMethodCallException implements BadMethodCallException
{
 public function __construct($method, $code = 0, Exception $previous = null)
 {
 parent::__construct("Method {$method} does not exist.", $code, $previous);
 }
}
